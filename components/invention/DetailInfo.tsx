import { Mechanic } from "@/types/Item";
import SectionHeading from "./SectionHeading";
import MechanicEntry from "./MechanicEntry";

interface DetailInfoProps {
    description: string[];
    mechanics: Mechanic[];
    workshopNotes: string[];
    dmNotes: string[];
}

export default function DetailInfo({description, mechanics, workshopNotes, dmNotes}: DetailInfoProps) {
    return (
        <section className="space-y-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 justify-items-center">
                <div className="flex flex-col gap-10">
                    <div>
                        <SectionHeading>Description</SectionHeading>
                        <div className="space-y-6 leading-relaxed">
                            {description.map((paragraph) => (
                                <p key={paragraph} className="text-justify">{paragraph}</p>
                            ))}
                        </div>
                    </div>

                    <div className="relative flex items-center justify-center">
                        <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-600 to-transparent" />
                        <div className="absolute w-2 h-2 rotate-45 bg-cyan-500 shadow-[0_0_10px_#06b6d4]" />
                    </div>

                    <div>
                        <SectionHeading>Workshop Notes</SectionHeading>
                        <div className="space-y-6 leading-relaxed">
                            {workshopNotes.map((paragraph) => (
                                <p key={paragraph} className="text-justify">{paragraph}</p>
                            ))}
                        </div>
                    </div>

                    <div className="relative flex items-center justify-center">
                        <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-600 to-transparent" />
                        <div className="absolute w-2 h-2 rotate-45 bg-cyan-500 shadow-[0_0_10px_#06b6d4]" />
                    </div>

                    <div>
                        <SectionHeading>Design Notes</SectionHeading>
                        <div className="space-y-3">
                            {dmNotes.map((note) => (
                                <div key={note} className="flex gap-3 items-start">
                                    <div className="mt-2 h-1.5 w-1.5 rotate-45 bg-accent shrink-0" />
                                    <p>{note}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    <SectionHeading>Mechanics</SectionHeading>
                    <div className="space-y-6">
                        {mechanics.map((mech) => ((
                            <MechanicEntry key={mech.title} title={mech.title} tags={mech.tags} summary={mech.summary} />
                        )))}
                    </div>
                </div>
            </div>
        </section>
    );
}