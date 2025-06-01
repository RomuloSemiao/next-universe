import { NextRequest, NextResponse } from "next/server";
import { IPost } from "@/lib/interface";
import { addPost, posts } from "@/lib/data";

async function GET(){
    return NextResponse.json({ posts })
}

async function POST(request: NextRequest) {
    const body: IPost = await request.json()
    const newPost: IPost = {
        id: Date.now().toString(),
        title: body.title || "Sem título",
        content: body.content || "Sem conteúdo"
    }
    addPost(newPost)

    return NextResponse.json({ mensagem: 'Post adicionado!', post: newPost})
}

export { GET, POST }