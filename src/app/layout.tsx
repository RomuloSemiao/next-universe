import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Next Universe",
    description: "Projeto completo com Next.JS",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt">
            <body>
                <main className="min-h-screen p-8">
                    {children}
                </main>
            </body>
        </html>
    );
}
