
export default function DetailDocs() {
    return (
        <section>
            <div className="mb-12 text-center">
                <h2 className="font-heading text-2xl mb-2">
                    Technical Documentation
                </h2>
                <div className="w-12 h-px bg-accent mx-auto mb-6" />

                <p className="mt-4 max-w-2xl mx-auto text-zinc-400">
                    Engineering schematics, reference material, and printable
                    documentation for Dungeon Masters.
                </p>

                <div className="mt-10">
                    <div className="rounded-xl border border-zinc-800 p-6 flex flex-col">
                        <h3 className="font-heading text-xl">
                            Need to convince your Dungeon Master?
                        </h3>

                        <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                            Hand them this Workshop Dossier.
                        </p>

                        <a
                            href="/docs/corpus-aegis-dossier.pdf"
                            target="_blank"
                            className="mt-6 inline-flex items-center justify-center rounded-md border border-accent px-4 py-2 text-accent transition hover:bg-accent hover:text-black"
                        >
                            Open Dossier
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}