import { cn } from "@/lib/utils";

interface MechanicEntryProps {
    title: string;
    tags: string[];
    summary: string;
    border: string;
    text: string;
    pill: string;
}

export default function MechanicEntry({ title, tags, summary, border, text, pill }: MechanicEntryProps) {
    return (
        <div className={cn("space-y-3 pb-6 border-b last:border-none max-w-xl", border)}>
            <h3 className="font-semibold uppercase tracking-widest">
                {title}
            </h3>

            <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <span key={tag} className={`rounded px-2 py-1 text-xs uppercase tracking-wider ${text} ${pill}`}>
                        {tag}
                    </span>
                ))}
            </div>

            <p className="text-zinc-300 pb-4">{summary}</p>
        </div>
    );
}