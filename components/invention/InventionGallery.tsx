"use client";

import { INVENTIONS } from "@/data/inventions";
import { motion } from "framer-motion";
import InventionCard from "./InventionCard";

export default function InventionGallery(){
    return (
        <section id="catalogue" className="flex flex-col items-center justify-center py-24">
            <div className="w-32 h-px bg-zinc-700 mb-8" />

            <div className="flex flex-col items-center gap-3 mb-20">
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
                    className="text-md text-muted-foreground"
                >
                    Browse a collection of handcrafted inventions, each designed to be adapted for your own table
                </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-24 gap-y-28 items-end">
                {INVENTIONS.map((invention) => (
                    <InventionCard 
                        key={invention.id} 
                        name={invention.name} 
                        type={invention.type} 
                        signature={invention.signature} 
                        image={invention.image} 
                        imageSize={invention.imageSize}
                    />
                ))}
            </div>
        </section>
    )
}