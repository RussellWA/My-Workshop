"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function AboutHero() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    // Background moves slightly with the mouse
    const bgX = useTransform(smoothX, [-1, 1], [10, -10]);
    const bgY = useTransform(smoothY, [-1, 1], [10, -10]);

    const handleMouseMove = (e: React.MouseEvent) => {
        // We calculate based on the section's dimensions, not the whole window
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        
        mouseX.set(x);
        mouseY.set(y);
    };
    
    return (
        <section 
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
            className="relative flex flex-col items-center justify-center px-20 pt-10"
        >
            <motion.div 
                style={{ x: bgX, y: bgY }}
                className="absolute -inset-12.5 opacity-10 pointer-events-none z-0"
            >
                <div className="w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-colors-foreground)_1px,transparent_1px)] bg-size-[24px_24px]" />
            </motion.div>

            <div className="relative flex flex-col items-center gap-3">
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
                    className="text-sm md:text-lg text-muted text-center mb-3"
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