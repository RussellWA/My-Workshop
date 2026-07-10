import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { Cinzel, Geist } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
	variable: "--font-cinzel",
	subsets: ["latin"],
});

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Arcane Workshop",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${cinzel.variable} ${geistSans.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col bg-background text-foreground">
                <Navbar />
                <main className="flex-1">
                    <div className="mx-auto max-w-6xl">
                        <ViewTransitions>
                            {children}
                        </ViewTransitions>
                    </div>
                </main>
                <Footer />
            </body>
        </html>
    );
}
