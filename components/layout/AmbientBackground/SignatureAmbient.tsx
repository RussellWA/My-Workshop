"use client";

import { ArcaneSignature, SIGNATURE_THEME } from "@/types/Item";
import { motion } from "framer-motion";

interface AmbientBackgroundProps {
    signature: ArcaneSignature;
}

export default function SignatureAmbient({
    signature,
}: AmbientBackgroundProps) {
    const theme = SIGNATURE_THEME[signature];

    return (
        <>
            {/* Vignette */}
            <div
                className="
                    fixed
                    inset-0
                    -z-50
                    pointer-events-none
                    bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.18)_70%,rgba(0,0,0,0.45)_100%)]
                "
            />

            {/* Workshop Spotlight */}
            <div
                className="
                    fixed
                    inset-0
                    -z-40
                    pointer-events-none
                    bg-[radial-gradient(circle_at_50%_18%,rgba(255,248,235,0.05),transparent_65%)]
                "
            />

            {/* Ambient Signature Lighting */}
            <motion.div
                className={`fixed inset-0 -z-30 pointer-events-none ${theme.ambientGlow}`}
                animate={{
                    opacity: [0.04, 0.08, 0.04]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </>
    );
}