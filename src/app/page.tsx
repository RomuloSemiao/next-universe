'use client'

import { getPosts } from "@/lib/data";
import { IPost } from "@/lib/interface";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
    const [posts, setPosts] = useState<IPost[]>()

    useEffect(() => {
        const fetchPosts = async () => {
            const data = await getPosts()
            setPosts(data)
        }

        fetchPosts()
    }, [])

    return (
        <div>
            <h1 className="text-4xl font-bold mb-6"> Bem-vindo ao Next Universe </h1>
            <Link 
                href='/post'
                className="block bg-purple-700 w-fit px-4 py-2 mb-6 text-white border-0 border-purple-700 rounded-lg hover:bg-purple-900 transition-colors duration-200"
            >
                Queres criar um novo post?
            </Link>
            <ul className="space-y-4 flex flex-row flex-wrap gap-4">
                {
                    posts?.map((post: IPost) => (
                        <li key={post.id} className="border-1 border-zin border-zinc-700 m-0 h-fit w-fit cursor-pointer rounded-lg text-white hover:bg-zinc-800 transition-colors duration-200">
                            <Link
                                href={`/post/${post.id}`}
                                className="flex justify-center items-center text-md font-semibold uppercase h-96 w-96"
                            >
                                {post.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
