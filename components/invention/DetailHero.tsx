"use client";

import { cn } from "@/lib/utils";
import { ArcaneSignature, SIGNATURE_THEME } from "@/types/Item";
import { motion } from "framer-motion";
import Image from "next/image";

interface DetailHeroProps {
    name: string;
    type: string;
    attunement: boolean;
    quote: string;
    image: string;
    imageSize: number;
    signature: ArcaneSignature
}

export default function DetailHero({name, type, attunement, quote, image, imageSize, signature}: DetailHeroProps) {
    const theme = SIGNATURE_THEME[signature]

    return (
        <section className="relative flex flex-col items-center justify-center min-h-[85vh] w-full pt-16">
            <div className="relative mb-16 flex flex-col items-center justify-center">
                <motion.div 
                    className={`absolute top-1/2 left-1/2 w-48 h-48 rounded-full blur-3xl -z-10 origin-center pointer-events-none ${theme.heroGlow}`}
                    style={{ x: "-50%", y: "-50%" }}
                    animate={{ 
                        opacity: [0.3, 0.6, 0.3], 
                        scale: [0.9, 1.2, 0.9] 
                    }}
                    transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                    }}
                />

                <motion.div 
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Image 
                        src={image} 
                        alt={name} 
                        width={imageSize*2} 
                        height={imageSize*2} 
                        className={cn("relative h-auto z-10", theme.imageGlow)}
                    />
                </motion.div>
            </div>

            <div className="flex flex-col items-center text-center z-20">
                <h1 className="text-4xl md:text-5xl font-bold tracking-widest uppercase text-zinc-100 mb-3 drop-shadow-md">
                    {name}
                </h1>

                <div className={`flex items-center gap-3 text-xs md:text-sm font-semibold tracking-widest uppercase mb-6 ${theme.text}`}>
                    <span>{type}</span>
                    <span className="w-1 h-1 bg-zinc-100 rounded-full"></span>
                    <span className="text-zinc-200/80">{attunement ? "Require Attunement" : "No Attunement"}</span>
                </div>

                <p className="text-lg md:text-xl italic text-zinc-400 font-serif max-w-lg mb-12">
                    &quot;{quote}.&quot;
                </p>

                {/* The Divider */}
                <div className="relative w-full max-w-2xl flex items-center justify-center">
                    <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-500 to-transparent"></div>
                    <div className={`absolute w-2 h-2 rotate-45 shadow-[0_0_10px_#06b6d4] ${theme.divider}`}></div>
                </div>
            </div>
        </section>
    );
}