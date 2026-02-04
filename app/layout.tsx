import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Pablo Mirazo | Backend Developer",
    description: "Portfolio of Pablo Mirazo, a Backend Developer specialized in robust systems.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body className="antialiased bg-zinc-950 text-zinc-100">
                {children}
            </body>
        </html>
    );
}
