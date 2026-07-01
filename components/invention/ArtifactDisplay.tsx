"use client";

import { ArcaneSignature, SIGNATURES } from "@/types/Item";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ArtifactDisplayProps {
    name: string;
    type: string;
    signature: ArcaneSignature;
    children: ReactNode;
}

export default function ArtifactDisplay({name, type, signature, children}: ArtifactDisplayProps) {
    const colors = SIGNATURES[signature]

    return (
        <motion.div
            initial="rest"
            animate="floating"
            whileHover="hover"
            className="cursor-pointer"
        >
            <div className="relative flex flex-col items-center">
                <motion.div 
                    className="relative z-20 mb-2"
                    variants={{
                        rest: {
                            y: 0,
                            scale: 1
                        },
                        floating: {
                            y: [0, -5, 0],
                            scale: 1,
                            transition: {
                                y: { 
                                    duration: 3, 
                                    repeat: Infinity, 
                                    ease: "easeInOut" 
                                },
                                scale: { 
                                    duration: 0.2, 
                                    ease: "easeOut" 
                                }
                            }
                        },
                        hover: {
                            y: -10,
                            scale: 1.1,
                            transition: {
                                duration: 0.3,
                                ease: "easeOut"
                            }
                        }
                    }}
                >
                    {children}
                </motion.div>
                <div className="relative z-10 w-64 flex flex-col items-center">

                    {/* Aura Glow */}
                    <motion.div 
                        className={`absolute -top-4 left-1/2 w-48 h-10 rounded-[100%] blur-xl z-20 pointer-events-none origin-center ${colors.glow}`}
                        style={{ x: "-50%" }}
                        animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    
                    {/* Inner core */}
                    <motion.div 
                        className={`absolute -top-1 left-1/2 w-24 h-3 rounded-[100%] blur-md z-20 pointer-events-none origin-center ${colors.core}`}
                        style={{ x: "-50%" }}
                        animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.1, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
                    />
                    
                    <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-10 h-1 bg-white rounded-full blur-[2px] opacity-90 z-20 pointer-events-none"></div>
                    <div className="w-full h-1 bg-zinc-600 rounded-t-md shadow-[0_-10px_20px_rgba(6,182,212,0.15)] relative z-10"></div>
                    <div className="w-full h-10 bg-zinc-800 rounded-b-sm border-b-4 border-zinc-900 shadow-xl flex items-center justify-center relative z-20 overflow-hidden">
                        {/* Inner shadow */}
                        <div className="absolute inset-0 shadow-[inset_0_4px_8px_rgba(0,0,0,0.5)] pointer-events-none"></div>
                        
                        <motion.h2 
                            className={`text-sm font-bold tracking-[0.25em] uppercase drop-shadow-[0_0_8px_rgba(34,211,238,0.9)] ${colors.text}`}
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                        >
                            {name}
                        </motion.h2>
                    </div>

                    <div className="absolute top-10 flex flex-col items-center -z-10">
                        <div className="flex justify-between w-12 -mb-px">
                            <div className="w-0.5 h-4 bg-linear-to-b from-zinc-900 to-zinc-600"></div>
                            <div className="w-0.5 h-4 bg-linear-to-b from-zinc-900 to-zinc-600"></div>
                        </div>
                        
                        <div className="w-32 py-1 bg-zinc-900 border border-zinc-800 rounded shadow-md flex items-center justify-center">
                            <p className="text-[11px] text-zinc-400 italic">{type}</p>
                        </div>
                    </div>

                    {/* Shadow on the wall behind/under the shelf */}
                    <div className="absolute top-10 w-64 h-24 bg-black/70 blur-xl -z-20"></div>
                </div>
            </div>
        </motion.div>
    )
}