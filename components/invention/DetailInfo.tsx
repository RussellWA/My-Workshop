import { ArcaneSignature, CreatorJournal, Mechanic, SIGNATURE_THEME } from "@/types/Item";
import DetailDivider from "./DetailDivider";
import MechanicEntry from "./MechanicEntry";
import SectionHeading from "./SectionHeading";

interface DetailInfoProps {
    description: string[];
    mechanics: Mechanic[];
    creatorJournal: CreatorJournal[];
    designNotes: string[];
    signature: ArcaneSignature;
}

export default function DetailInfo({description, mechanics, creatorJournal, designNotes, signature}: DetailInfoProps) {
    const theme = SIGNATURE_THEME[signature]
    
    return (
        <section className="space-y-20 px-10">
            <div className="hidden md:grid md:grid-cols-2 gap-20 justify-items-center">
                <div className="flex flex-col gap-10">
                    <div>
                        <SectionHeading divider={theme.divider}>Description</SectionHeading>
                        <div className="space-y-6 leading-relaxed">
                            {description.map((paragraph) => (
                                <p key={paragraph} className="text-justify">{paragraph}</p>
                            ))}
                        </div>
                    </div>

                    <DetailDivider color={theme.divider} />

                    <div>
                        <SectionHeading divider={theme.divider}>Design Notes</SectionHeading>
                        <div className="space-y-3">
                            {designNotes.map((note) => (
                                <div key={note} className="flex gap-3 items-start">
                                    <div className={`mt-2 h-1.5 w-1.5 rotate-45 shrink-0 ${theme.divider}`} />
                                    <p>{note}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="hidden md:block">
                    <SectionHeading divider={theme.divider}>Mechanics</SectionHeading>
                    <div className="space-y-6">
                        {mechanics.map((mech) => ((
                            <MechanicEntry 
                                key={mech.title} 
                                title={mech.title} 
                                tags={mech.tags} 
                                summary={mech.summary} 
                                border={theme.border}
                                text={theme.text}
                                pill={theme.pill}
                            />
                        )))}
                    </div>
                </div>
            </div>

            <div className="hidden md:flex flex-col gap-10 justify-items-center">
                <DetailDivider color={theme.divider} />
                <div>
                    <SectionHeading divider={theme.divider}>Creator's Journal</SectionHeading>
                    <div className="space-y-6 leading-relaxed">
                        {creatorJournal.map(({ day, entry }) => (
                            <div
                                key={day}
                                className="border-l border-zinc-800 pl-5"
                            >
                                <div className="mb-2 flex items-center gap-3">
                                    <span
                                        className={`
                                            text-xs
                                            font-semibold
                                            uppercase
                                            tracking-[0.3em]
                                            ${theme.text}
                                        `}
                                    >
                                        Day {day}
                                    </span>

                                    <div className="h-px flex-1 bg-zinc-800" />
                                </div>

                                <p className="leading-8 text-zinc-300">
                                    {entry}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <div className="flex flex-col gap-20 justify-items-center md:hidden">
                <div className="flex flex-col gap-5">
                    <div>
                        <SectionHeading divider={theme.divider}>Description</SectionHeading>
                        <div className="space-y-6 leading-relaxed">
                            {description.map((paragraph) => (
                                <p key={paragraph} className="text-[12px] text-justify">{paragraph}</p>
                            ))}
                        </div>
                    </div>

                    <DetailDivider color={theme.divider} />

                    <div>
                        <SectionHeading divider={theme.divider}>Mechanics</SectionHeading>
                        <div className="space-y-3">
                            {mechanics.map((mech) => ((
                                <MechanicEntry 
                                    key={mech.title} 
                                    title={mech.title} 
                                    tags={mech.tags} 
                                    summary={mech.summary} 
                                    border={theme.border}
                                    text={theme.text}
                                    pill={theme.pill}
                                />
                            )))}
                        </div>
                    </div>

                    <DetailDivider color={theme.divider} />

                    <div>
                        <SectionHeading divider={theme.divider}>Design Notes</SectionHeading>
                        <div className="space-y-3">
                            {designNotes.map((note) => (
                                <div key={note} className="flex gap-3 items-start">
                                    <div className={`mt-2 h-1.5 w-1.5 rotate-45 shrink-0 ${theme.divider}`} />
                                    <p className="text-[12px]">{note}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <DetailDivider color={theme.divider} />

                    <div>
                        <SectionHeading divider={theme.divider}>Creator's Journal</SectionHeading>
                        <div className="space-y-3 leading-relaxed">
                            {creatorJournal.map(({ day, entry }) => (
                                <div
                                    key={day}
                                    className="border-l border-zinc-800 pl-5"
                                >
                                    <div className="mb-2 flex items-center gap-3">
                                        <span
                                            className={`
                                                text-xs
                                                font-semibold
                                                uppercase
                                                tracking-[0.3em]
                                                ${theme.text}
                                            `}
                                        >
                                            Day {day}
                                        </span>

                                        <div className="h-px flex-1 bg-zinc-800" />
                                    </div>

                                    <p className="leading-8 text-zinc-300">
                                        {entry}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}