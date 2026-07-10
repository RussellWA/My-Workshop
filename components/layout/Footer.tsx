import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-zinc-800/70">
            <div className="mx-auto flex max-w-7xl flex-col items-center px-8 py-20">

                <p className="mb-8 text-xs uppercase tracking-[0.45em] text-zinc-600">
                    End of Archive
                </p>

                {/* Divider */}
                <div className="mb-8 h-px w-32 bg-linear-to-r from-transparent via-zinc-700 to-transparent" />

                <Link
                    href="/"
                    className="text-lg font-bold uppercase tracking-[0.35em] text-zinc-100"
                >
                    Arcane Workshop
                </Link>

                <p className="mt-2 text-xs uppercase tracking-[0.35em] text-zinc-500">
                    Handcrafted D&amp;D 5e Inventions
                </p>
                <div className="mt-10 flex flex-col items-center gap-1 text-sm text-zinc-500">
                    <span>Created by</span>

                    <span className="tracking-[0.2em] uppercase text-zinc-300">
                        Russell William Ardian
                    </span>
                </div>
                <p className="mt-10 text-xs uppercase tracking-[0.35em] text-zinc-600">
                    © 2026
                </p>
            </div>
        </footer>
    );
}