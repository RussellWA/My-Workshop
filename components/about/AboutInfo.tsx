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
            </motion.div>
        </section>
    );
}