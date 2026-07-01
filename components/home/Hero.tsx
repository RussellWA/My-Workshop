"use client";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function HomeHero() {
    return (
        <section className="flex flex-col items-center justify-center min-h-[calc(100vh-52px)]">
            <div className="flex flex-col items-center gap-3">
                <motion.h1 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        ease: "easeOut"
                    }}
                    className="text-7xl font-heading font-semibold tracking-wider leading-tight"
                >
                    Arcane Workshop
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        delay: 0.15
                    }}
                    className="text-md text-muted"
                >
                    Handcrafted D&D 5e Inventions
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                        opacity: 1,
                        y: [0, -4, 0],
                    }}
                    transition={{
                        delay: 0.5,
                        opacity: {
                            duration: 0.5
                        },
                        y: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }
                    }}
                    className="hover:text-accent"
                >
                    <ArrowDown className="size-5" />
                </motion.div>
            </div>
        </section>
    )
}