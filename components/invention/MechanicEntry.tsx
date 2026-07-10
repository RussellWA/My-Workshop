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
        <div className={cn("space-y-3 pb-3 border-b last:border-none max-w-xl", border)}>
            <h3 className="text-xs md:text-base font-semibold uppercase tracking-widest">
                {title}
            </h3>

            <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <span key={tag} className={`rounded px-2 py-1 text-[10px] md:text-xs uppercase tracking-wider ${text} ${pill}`}>
                        {tag}
                    </span>
                ))}
            </div>

            <p className="text-[10px] md:text-base text-zinc-300 pb-4">{summary}</p>
        </div>
    );
}