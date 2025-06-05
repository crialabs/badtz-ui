import { cache } from 'react';

// Tipos para os dados da API WordPress
export interface WordpressPost {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    author?: Array<{
      id: number;
      name: string;
      url: string;
      description: string;
      avatar_urls: Record<string, string>;
    }>;
    'wp:featuredmedia'?: Array<{
      id: number;
      source_url: string;
      alt_text: string;
      media_details: {
        width: number;
        height: number;
        sizes: Record<string, {
          source_url: string;
          width: number;
          height: number;
        }>;
      };
    }>;
    'wp:term'?: Array<Array<{
      id: number;
      name: string;
      slug: string;
      taxonomy: string;
    }>>;
  };
}

// Configure sua URL do WordPress aqui
const API_URL = process.env.WORDPRESS_API_URL || 'https://api.seu-wordpress.com/wp-json';

/**
 * Função para buscar dados da API WordPress com cache
 */
const fetchAPI = cache(async <T>(endpoint: string, params: Record<string, string> = {}): Promise<T> => {
  const queryString = new URLSearchParams(params).toString();
  const url = `${API_URL}${endpoint}${queryString ? '?' + queryString : ''}`;
  
  try {
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      next: {
        // Revalidar a cada 10 minutos
        revalidate: 600,
        tags: ['wordpress'],
      },
    });

    if (!res.ok) {
      throw new Error(`WordPress API Error: ${res.status} ${res.statusText}`);
    }

    return res.json();
  } catch (error) {
    console.error('Erro ao buscar dados do WordPress:', error);
    throw error;
  }
});

/**
 * Busca todos os posts do WordPress
 */
export const getAllPosts = cache(async (locale: string = 'pt-br', params: Record<string, string> = {}): Promise<WordpressPost[]> => {
  const defaultParams = {
    per_page: '10',
    _embed: 'true',
    lang: locale === 'en' ? 'en' : 'pt-br', // Supondo que você usa WPML ou Polylang
  };

  const mergedParams = { ...defaultParams, ...params };
  const posts = await fetchAPI<WordpressPost[]>('/wp/v2/posts', mergedParams);
  
  return posts;
});

/**
 * Busca um post específico por slug
 */
export const getPostBySlug = cache(async (slug: string, locale: string = 'pt-br'): Promise<WordpressPost | null> => {
  try {
    const params = {
      slug,
      _embed: 'true',
      lang: locale === 'en' ? 'en' : 'pt-br',
    };
    
    const posts = await fetchAPI<WordpressPost[]>('/wp/v2/posts', params);
    
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error(`Erro ao buscar post com slug "${slug}":`, error);
    return null;
  }
});

/**
 * Busca posts por categoria
 */
export const getPostsByCategory = cache(async (categoryId: number, locale: string = 'pt-br'): Promise<WordpressPost[]> => {
  const params = {
    categories: categoryId.toString(),
    _embed: 'true',
    lang: locale === 'en' ? 'en' : 'pt-br',
  };
  
  return fetchAPI<WordpressPost[]>('/wp/v2/posts', params);
});

/**
 * Busca categorias do WordPress
 */
export const getCategories = cache(async (locale: string = 'pt-br'): Promise<any[]> => {
  const params = {
    per_page: '100',
    lang: locale === 'en' ? 'en' : 'pt-br',
  };
  
  return fetchAPI<any[]>('/wp/v2/categories', params);
});

/**
 * Busca posts relacionados baseados em categorias ou tags
 */
export const getRelatedPosts = cache(async (postId: number, locale: string = 'pt-br'): Promise<WordpressPost[]> => {
  // Primeiro busca o post para obter suas categorias
  const post = await fetchAPI<WordpressPost>(`/wp/v2/posts/${postId}`, {
    _embed: 'false',
    lang: locale === 'en' ? 'en' : 'pt-br',
  });
  
  if (!post || !post.categories || post.categories.length === 0) {
    return [];
  }
  
  // Busca posts na mesma categoria principal
  const params = {
    categories: post.categories[0].toString(),
    exclude: postId.toString(),
    per_page: '3',
    _embed: 'true',
    lang: locale === 'en' ? 'en' : 'pt-br',
  };
  
  return fetchAPI<WordpressPost[]>('/wp/v2/posts', params);
});

/**
 * Utilidades para extrair dados de um post _embedded
 */
export const getPostAuthor = (post: WordpressPost) => {
  return post._embedded?.author?.[0] || null;
};

export const getPostFeaturedImage = (post: WordpressPost) => {
  return post._embedded?.['wp:featuredmedia']?.[0] || null;
};

export const getPostCategories = (post: WordpressPost) => {
  return post._embedded?.['wp:term']?.[0] || [];
};

export const getPostTags = (post: WordpressPost) => {
  return post._embedded?.['wp:term']?.[1] || [];
};
