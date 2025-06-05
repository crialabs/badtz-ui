import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge'; // Para usar o Edge Runtime

export async function POST(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get('secret');
    
    // Verifica a chave secreta para autenticação
    if (secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json(
        { message: 'Token de autenticação inválido' },
        { status: 401 }
      );
    }

    // Revalida o cache dos dados do WordPress
    revalidateTag('wordpress');
    
    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (error) {
    console.error('Erro durante revalidação:', error);
    return NextResponse.json(
      { message: 'Erro durante revalidação', error: (error as Error).message },
      { status: 500 }
    );
  }
}
