"use client";

import { motion, Variants } from "framer-motion";

export default function AboutInfo() {
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="py-15 px-6 md:px-20 flex justify-center">
            <motion.div 
                className="max-w-3xl flex flex-col items-center text-center gap-8"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <motion.span 
                    variants={item}
                    className="text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground"
                >
                    The Workshop
                </motion.span>

                <motion.p 
                    variants={item}
                    className="text-lg md:text-xl leading-relaxed text-foreground"
                >
                    Arcane Workshop is a personal engineering archive dedicated to designing Artificer-inspired inventions for Dungeons & Dragons 5th Edition.
                </motion.p>

                <motion.div 
                    variants={item}
                    className="flex flex-col gap-4 text-lg md:text-xl mt-4 border-t border-border pt-12 w-full max-w-lg"
                >
                    <p className="text-muted-foreground">Instead of asking,</p>
                    <p className="italic font-serif text-foreground/80">"What spell created this?"</p>
                    <p className="text-muted-foreground pt-6">I ask...</p>
                    <p className="font-semibold text-2xl md:text-3xl font-heading text-foreground">
                        "How was this engineered?"
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
}