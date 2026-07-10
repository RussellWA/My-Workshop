"use client";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function HomeHero() {

    const handleScroll = () => {
        const invention = document.getElementById("catalogue")
        if (invention) {
            invention.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }

    return (
        <section className="flex flex-col items-center justify-center min-h-[calc(100vh-52px)] px-20">
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
                    className="text-xs md:text-md text-muted"
                >
                    Handcrafted D&D 5e Inventions
                </motion.p>
                <motion.div
                    initial="rest"
                    animate="floating"
                    whileHover="hover"
                    whileTap="tap"
                    onClick={handleScroll}
                    className="cursor-pointer p-2"
                    variants={{
                        rest: { scale: 1 },
                        floating: { scale: 1 },
                        hover: { scale: 1.1 },
                        tap: { scale: 0.9 }
                    }}
                >
                    <motion.div
                        variants={{
                            rest: { y: 0 },
                            floating: {
                                y: [0, -4, 0],
                                transition: {
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }
                            },
                            hover: {
                                y: 0,
                                transition: { duration: 0.2, ease: "easeOut" }
                            },
                            tap: { y: 2 }
                        }}
                    >
                        <ArrowDown className="size-6 text-zinc-400" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}