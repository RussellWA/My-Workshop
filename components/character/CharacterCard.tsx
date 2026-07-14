"use client";

import { motion } from "framer-motion";

interface CharacterProps {
    name: string;
    race: string;
    characterClass: string;
    level: number;
    campaign: string;
    imageUrl: string;
}

export default function CharacterCard({
    name = "Elara Gearspark",
    race = "Rock Gnome",
    characterClass = "Artificer",
    level = 6,
    campaign = "The Shattered Isles",
    imageUrl = "/placeholder-avatar.jpg"
}: Partial<CharacterProps>) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col items-center sm:items-start gap-5 p-6 border border-border/50 bg-muted/10 rounded-xl max-w-md"
        >
            <div className="shrink-0">
                <div className="w-38 h-38 rounded-full overflow-hidden border-2 border-border/50 bg-muted">
                    <img 
                        src={imageUrl} 
                        alt={`Portrait of ${name}`} 
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            <div className="flex flex-col text-center sm:text-left">
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                    Engineer
                </span>
                
                <h3 className="text-xl font-heading font-semibold text-foreground">
                    {name}
                </h3>
                
                <p className="text-sm text-foreground/80 mt-1">
                    Level {level} {race} {characterClass}
                </p>
                
                <span className="text-xs font-medium text-muted-foreground">
                    Campaign: <span className="text-foreground/70 italic">{campaign}</span>
                </span>
            </div>
        </motion.div>
    );
}