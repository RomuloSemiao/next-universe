'use client'

import Link from "next/link"
import { useState } from "react"

export default function CreatePostPage() {
    const [title, setTitle] = useState<string>('')
    const [content, setContent] = useState<string>('')

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        if (title && content) {
            await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, content })
            }).then(() => {
                setTitle('')
                setContent('')
                alert('Sucesso!')
            })
        } else {
            alert('Preencha todos os campos!')
        }
    }

    return (
        <section className="w-full max-w-4xl">
            <h2 className="text-4xl font-bold mb-6">Crie o seu Post!</h2>

            <form onSubmit={handleSubmit} className="border-zinc-600 bg-zinc-800 rounded-md p-4">
                <label className="flex flex-col">
                    <span className="text-xl font-medium">
                        Conteúdo do seu Post
                    </span>

                    <input 
                        onChange={(event) => setTitle(event.target.value)} 
                        value={title} 
                        type="text" 
                        className="border-2 border-zinc-700 rounded-md px-2 py-1 outline-0 mt-4" 
                        placeholder="Título"
                    />

                    <textarea 
                        onChange={(event) => setContent(event.target.value)} 
                        value={content} 
                        className="border-2 border-zinc-700 rounded-md px-2 py-1 outline-0 mt-4" 
                        placeholder="Conteúdo"
                    />
                </label>

                <button type="submit" className="px-2 py-1 bg-zinc-700 outline-0 border-0 rounded-md cursor-pointer hover:bg-zinc-800 duration-200 ease-in mt-4">
                    Enviar
                </button>
            </form>


            <div className="mt-6">
                <Link href="/" className="block bg-purple-700 w-fit px-4 py-2 mb-6 text-white border-0 border-purple-700 rounded-lg hover:bg-purple-900 transition-colors duration-200">
                    Voltar a Home
                </Link>
            </div>
        </section>
    )
}