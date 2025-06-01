import { IPost } from "./interface"

export const posts: IPost[] = [
    { id: '1', title: "Primeiro post", content: "" },
    { id: '2', title: "Segundo post", content: "" },
    { id: '3', title: "Terceiro post", content: "" },
    { id: '4', title: "Quarto post", content: "" },
]

async function getPosts(): Promise<IPost[]> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post`, {
            headers: {
                "Content-Type": "application/json",
            },
            cache: 'no-store',
        })
    const data = await response.json()

    return data.posts
}

async function addPost(post: IPost) {
    posts.push(post)
}

export { getPosts, addPost }