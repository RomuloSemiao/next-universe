import PostContent from "@/components/PostContent";

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post/${id}`, {
            headers: {
                "Content-Type": "application/json",
            },
            cache: 'no-store',
        });

        if (!res.ok) {
            console.error(`Erro ao buscar post ${id}: ${res.status}`);

            return <div>Erro ao carregar o post. Status: {res.status}</div>;
        }

        const postData = await res.json();

        return <PostContent post={postData} />;

    } catch (error) {
        console.error("Erro ao buscar ou processar os dados:", error);
        return <div>Ocorreu um erro ao carregar o post.</div>;
    }
}