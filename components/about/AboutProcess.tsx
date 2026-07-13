"use client";

import { motion, Variants } from "framer-motion";

const steps = [
    "Idea",
    "Gameplay Mechanics",
    "Arcane Engineering",
    "Documentation",
    "Illustration"
];

export default function AboutProcess() {
    const container: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, scale: 0.9, filter: "blur(4px)" },
        visible: { 
            opacity: 1, 
            scale: 1, 
            filter: "blur(0px)",
            transition: { duration: 0.5, ease: "easeOut" } 
        }
    };

    return (
        <section className="py-20 px-6 md:px-20 border-t border-border/50">
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">
                
                {/* Section Header */}
                <div className="text-center flex flex-col gap-2">
                    <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">
                        The Pipeline
                    </h2>
                </div>

                {/* Process Flow */}
                <motion.div 
                    className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full justify-center"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {steps.map((step, index) => (
                        <div key={step} className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                            
                            <motion.div 
                                variants={item}
                                className="px-6 py-3 rounded-full border border-border bg-muted/10 text-foreground font-medium whitespace-nowrap"
                            >
                                {step}
                            </motion.div>

                            {index !== steps.length - 1 && (
                                <motion.div variants={item} className="text-muted/50">
                                    <svg 
                                        width="24" 
                                        height="24" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="2" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round"
                                        className="transform md:-rotate-90 transition-transform"
                                    >
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                        <polyline points="19 12 12 19 5 12"></polyline>
                                    </svg>
                                </motion.div>
                            )}
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}