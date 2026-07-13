"use client";

import { motion } from "framer-motion";

export default function AboutCreator() {
    return (
        <section className="py-24 px-6 md:px-20">
            <motion.div 
                className="max-w-3xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-10 bg-muted/10 border border-border p-8 md:p-12 rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
            >
                <div className="flex-1 flex flex-col gap-4">
                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">
                        The Engineer
                    </span>
                    <h2 className="text-3xl font-heading font-semibold text-foreground">
                        Hi, I&apos;m Russell.
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                        I am a software developer who approaches D&D mechanics the same way I approach application architecture—with a focus on logic, scalable systems, and clean design. 
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                        When I&apos;m not writing backend services or building web tools, I&apos;m usually designing custom game mechanics, tinkering with hardware, or drafting new schematics for the workshop.
                    </p>
                    
                    <div className="mt-4">
                        <a 
                            href="https://russellwa.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-md hover:bg-foreground/90 transition-colors"
                        >
                            View My Portfolio
                            <svg 
                                width="16" 
                                height="16" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            >
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}