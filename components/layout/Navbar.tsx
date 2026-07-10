"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-black/20 border-b border-zinc-800/70">
            <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-8">
                <Link
                    href="/"
                    className="group flex flex-col leading-none"
                >
                    <span className="text-lg font-bold tracking-[0.35em] uppercase text-zinc-100 transition-colors group-hover:text-white">
                        Arcane Workshop
                    </span>

                    <span className="mt-1 text-[10px] uppercase tracking-[0.45em] text-zinc-500">
                        Engineering Archive
                    </span>
                </Link>

                {/* Navigation */}
                <div className="flex items-center gap-10">
                    <Link
                        href="/about"
                        className="group relative text-sm uppercase tracking-[0.3em] text-zinc-400 transition-colors hover:text-zinc-100"
                    >
                        About

                        <span className="absolute -bottom-2 left-0 h-px w-0 bg-zinc-300 transition-all duration-300 group-hover:w-full" />
                    </Link>
                </div>
            </nav>
        </header>
    );
}