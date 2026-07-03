
interface MechanicEntryProps {
    title: string;
    tags: string[];
    summary: string;
}

export default function MechanicEntry({ title, tags, summary }: MechanicEntryProps) {
    return (
        <div className="space-y-3 pb-6 border-b border-zinc-600 last:border-none max-w-xl">
            <h3 className="font-semibold uppercase tracking-widest">
                {title}
            </h3>

            <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <span key={tag} className="rounded border border-zinc-700 bg-zinc-900/60 px-2 py-1 text-xs uppercase tracking-wider text-accent">
                        {tag}
                    </span>
                ))}
            </div>

            <p className="text-zinc-300 pb-4">{summary}</p>
        </div>
    );
}