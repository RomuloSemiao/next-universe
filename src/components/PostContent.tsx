'use client'

import { IPost } from "@/lib/interface"
import Link from "next/link"

export default function PostContent({ post }: { post: IPost }) {
    return (
        <section>
            <div className="flex flex-col">
                <div className="flex flex-row items-baseline mb-6">
                    <h2 className="text-4xl font-bold text-zinc-300 mr-4">{post.title}</h2>
                    <span className="text-sm text-zinc-600">ID: {post.id}</span>
                </div>

                <p className="text-xl text-zinc-300">Conteúdo: <br />
                    <span className="text-base">
                        {post.content}
                    </span>
                </p>
            </div>

            <div className="mt-6">
                <Link href="/" className="block bg-purple-700 w-fit px-4 py-2 mb-6 text-white border-0 border-purple-700 rounded-lg hover:bg-purple-900 transition-colors duration-200">
                    Voltar a Home
                </Link>
            </div>
        </section>
    )
}
