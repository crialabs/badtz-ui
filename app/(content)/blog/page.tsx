/* TODO: blog is OK- but can hit harder -> needs:
-stronger internal linking (w related articles)
-breadcrumbs
-topic clusters -> auto tags +++
-pagination (next/prev + ?numbered pages)
-json-ld for each
priority-2
*/

import Link from "next/link";
import { compareDesc } from "date-fns";
import { formatDate } from "@/lib/utils";
import { Metadata } from "next";
import { Icons } from "@/components/icons";
import BunnyImage from "@/components/bunny-image";
import { getAllPosts, getPostCategories, getPostFeaturedImage, getPostAuthor } from "@/lib/wordpress";
import { notFound } from "next/navigation";
export const metadata: Metadata = {
  title: "BadtzUI • Blog",
  description:
    "Welcome to our blog, where we share tips on enhancing yourwebsite's aesthetics, improving your landing page, and much more...",
  openGraph: {
    title: "BadtzUI - Modern React Components",
    images: "/og-image.png",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://www.badtz-ui.com/blog",
  },
};

export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Revalidar a cada hora

export default async function BlogPage() {
  try {
    // Buscar posts do WordPress
    const posts = await getAllPosts();
    
    // Ordenar posts por data (mais recentes primeiro)
    const sortedPosts = [...posts].sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });

    const jsonLdBlog = {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "BadtzUI Blog",
      description:
        "A blog where we share tips on enhancing website aesthetics, improving landing pages, and more...",
      publisher: {
        "@type": "Organization",
        name: "BadtzUI",
        logo: {
          "@type": "ImageObject",
          url: "/logo.png",
        },
      },
      url: "https://badtz-ui.com/blog",
    };

    const jsonLdPosts = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Blog Posts",
      itemListElement: sortedPosts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://badtz-ui.com/blog/${post.slug}`,
      })),
    };
  return (
    <div className="w-full h-full pb-16 sm:pb-28 pt-10 md:pt-16">
      <div className="px-6 lg:px-8 lg:max-w-5xl mx-auto">
        <div className="flex flex-col items-start border-b border-border pb-6">
          <div className="flex w-full justify-between gap-4 items-end">
            <h1 className="text-3xl font-semibold tracking-tighter text-foreground text-balance max-w-[605px] font-gilroy">
              Blog
            </h1>
            <Link
              href="https://x.com/badtz_ui"
              target="_blank"
              className="gap-2 px-2 md:px-3 h-8 text-[13.5px] border hover:border-foreground/10 duration-300 whitespace-nowrap shrink-0 hover:bg-sidebar-accent transition-colors flex items-center justify-center rounded [&_svg]:pointer-events-none [&_svg]:size-3 [&_svg]:shrink-0 text-foreground bg-transparent"
            >
              <Icons.twitter />
              <span className="hidden md:block font-light">Updates</span>
            </Link>
          </div>
          <p className="mt-4 text-balance max-w-[550px] md:max-w-[700px] tracking-tight text-sidebar-muted-foreground text-[15px]">
            Welcome to our blog, where we share tips on enhancing your website's
            aesthetics, improving your landing page, and much more...
          </p>
        </div><hr className="my-3 border-none" />
        {sortedPosts?.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4">
            {sortedPosts.map((post, index) => {
              const featuredImage = getPostFeaturedImage(post);
              const author = getPostAuthor(post);
              
              return (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <article
                    className="flex flex-col w-full p-2 rounded-xl transition-colors duration-200 group/article"
                  >
                    {featuredImage && (
                      <BunnyImage
                        src={featuredImage.source_url}
                        alt={post.title.rendered}
                        width={760}
                        height={400}
                        className="aspect-video object-cover bg-secondary border-border border rounded-lg"
                        priority={index <= 1}
                        quality={100}
                      />
                    )}
                    <div className="pt-2.5 p-1">
                      <h2 className="group-hover/article:text-foreground mt-2 font-medium transition-colors duration-300 text-xl text-sidebar-foreground font-gilroy">
                        <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                      </h2>
                      {post.date && (
                        <p className="text-xs text-sidebar-muted-foreground mt-1.5">
                          {formatDate(post.date)}
                        </p>
                      )}
                      {post.excerpt?.rendered && (
                        <p className="mt-3 text-sm text-sidebar-muted-foreground text-prose">
                          <span dangerouslySetInnerHTML={{ 
                            __html: post.excerpt.rendered.length > 140
                              ? `${post.excerpt.rendered.substring(0, 140)}...`
                              : post.excerpt.rendered 
                          }} />
                        </p>
                      )}

                      <div className="flex items-center space-x-1.5 text-sm mt-4">
                        <BunnyImage
                          src={author?.avatar_urls?.['96'] || "/images/badtz-avatar-small.webp"}
                          alt={author?.name || "Autor"}
                          width={20}
                          height={20}
                          className="rounded-full bg-secondary shrink-0 h-5 w-5 invert dark:invert-[0]"
                        />
                        <p className="text-sm text-sidebar-muted-foreground">
                          {author?.name || "Badtz"}
                        </p>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        ) : (
          <p>No posts published.</p>
        )}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBlog) }}
      />      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPosts) }}
      />
    </div>
  );
  } catch (error) {
    console.error("Erro ao carregar posts do WordPress:", error);
    return notFound();
  }
}
