import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-zinc-800/70">
            <div className="mx-auto flex max-w-7xl flex-col items-center px-8 py-5 md:py-10">

                <p className="mb-8 text-[8px] md:text-xs uppercase tracking-[0.45em] text-zinc-600">
                    End of Archive
                </p>

                {/* Divider */}
                <div className="mb-8 h-px w-32 bg-linear-to-r from-transparent via-zinc-700 to-transparent" />

                <div className=" flex flex-col items-center gap-1 text-xs md:text-sm text-zinc-500">
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