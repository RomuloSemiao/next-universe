import { NextResponse } from 'next/server';
import { getPosts } from '@/lib/data';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;

    const posts = await getPosts();

    if (!Array.isArray(posts)) {
        console.error('getPosts() não retornou um array:', posts);
        return NextResponse.json(
            { message: 'Erro interno do servidor: Dados de posts inválidos' },
            { status: 500 }
        );
    }

    const post = posts.find(p => p && p.id === id);

    if (post) {
        return NextResponse.json(post, { status: 200 });
    } else {
        return NextResponse.json({ message: 'Post não encontrado' }, { status: 404 });
    }
}
