import { ArcaneSignature, Mechanic, SIGNATURE_THEME } from "@/types/Item";
import DetailDivider from "./DetailDivider";
import MechanicEntry from "./MechanicEntry";
import SectionHeading from "./SectionHeading";

interface DetailInfoProps {
    description: string[];
    mechanics: Mechanic[];
    workshopNotes: string[];
    designNotes: string[];
    signature: ArcaneSignature;
}

export default function DetailInfo({description, mechanics, workshopNotes, designNotes, signature}: DetailInfoProps) {
    const theme = SIGNATURE_THEME[signature]
    
    return (
        <section className="space-y-20 px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 justify-items-center">
                <div className="flex flex-col gap-10">
                    <div className="order-1">
                        <SectionHeading divider={theme.divider}>Description</SectionHeading>
                        <div className="space-y-6 leading-relaxed">
                            {description.map((paragraph) => (
                                <p key={paragraph} className="text-justify">{paragraph}</p>
                            ))}
                        </div>
                    </div>

                    <DetailDivider color={theme.divider} />

                    <div className="order-3">
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

                    <DetailDivider color={theme.divider} />

                    <div className="order-4">
                        <SectionHeading divider={theme.divider}>Creator's Journal</SectionHeading>
                        <div className="space-y-6 leading-relaxed">
                            {workshopNotes.map((paragraph) => (
                                <p key={paragraph} className="text-justify">{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="order-2">
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
        </section>
    );
}