"use client";

import { motion, Variants } from "framer-motion";

// Define the shape of our data
interface Principle {
    id: string;
    title: string;
    description: string;
}

const principles: Principle[] = [
    {
        id: "01",
        title: "Problem Driven",
        description: "Devices are born from necessity. They are engineered to solve specific challenges faced by the party, balancing mechanical utility with player identity."
    },
    {
        id: "02",
        title: "Engineering Through Magic",
        description: "Inventions are built as though magic obeys physical laws. Every enchantment requires a power source, a conduit, and a physical mechanism to function."
    },
    {
        id: "03",
        title: "Mechanics Before Lore",
        description: "Function dictates form. The gameplay mechanics are established first; the materials, schematics, and lore are then reverse-engineered to ground the item in the world."
    }
];

export default function AboutPrinciples() {
    const container: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const card: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.6, ease: "easeOut" } 
        }
    };

    return (
        <section className="py-20 px-6 md:px-20 border-t border-border/50 bg-muted/20">
            <div className="max-w-6xl mx-auto flex flex-col gap-12">
                
                <div className="flex flex-col gap-2 text-center md:text-left">
                    <h2 className="text-3xl font-heading font-semibold text-foreground">
                        Workshop Principles
                    </h2>
                    <p className="text-muted-foreground max-w-2xl">
                        The core philosophies guiding every schematic and prototype engineered in the workshop.
                    </p>
                </div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {principles.map((item) => (
                        <motion.div 
                            key={item.id}
                            variants={card}
                            className="flex flex-col gap-4 p-8 border border-border/50 rounded-lg bg-background hover:border-border transition-colors duration-300"
                        >
                            <span className="text-5xl font-mono font-bold text-muted/30">
                                {item.id}
                            </span>
                            
                            <h3 className="text-xl font-semibold text-foreground">
                                {item.title}
                            </h3>
                            
                            <p className="text-muted-foreground leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}