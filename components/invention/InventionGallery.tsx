"use client";

import { motion } from "framer-motion";

export default function InventionGallery(){
    return (
        <section className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center gap-3">
                <motion.h1 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        ease: "easeOut"
                    }}
                    className="text-4xl font-heading font-semibold tracking-wider leading-tight"
                >
                    Workshop Catalogue
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        delay: 0.15
                    }}
                    className="text-md text-muted"
                >
                    Browse a collection of handcrafted inventions, each designed to be adapted for your own table
                </motion.p>
            </div>
        </section>
    )
}