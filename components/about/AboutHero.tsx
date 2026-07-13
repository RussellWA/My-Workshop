"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
    return (
        <section className="flex flex-col items-center justify-center px-20 pt-10">
            <div className="flex flex-col items-center gap-3">
                <motion.h1 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        ease: "easeOut"
                    }}
                    className="text-5xl md:text-7xl font-heading font-semibold tracking-wider leading-tight text-center"
                >
                    About
                </motion.h1>
                
                <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        delay: 0.15
                    }}
                    className="text-sm md:text-lg text-muted text-center"
                >
                    Where Magic is Engineered, Not Merely Enchanted
                </motion.p>

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.3,
                    }}
                    className="w-full h-px origin-center bg-linear-to-r from-transparent via-zinc-500 to-transparent"
                />
            </div>
        </section>
    );
}