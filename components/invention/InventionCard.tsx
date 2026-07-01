"use client";

import { ArcaneSignature } from "@/types/Item";
import ArtifactDisplay from "./ArtifactDisplay";
import Image from "next/image";
import { motion } from "framer-motion";

interface InventionCardProps {
    name: string;
    type: string;
    signature: ArcaneSignature;
    image: string;
    imageSize: number;
}

export default function InventionCard({name, type, signature, image, imageSize}: InventionCardProps) {
    return (
        <ArtifactDisplay name={name} type={type} signature={signature}>
            <Image 
                src={image} 
                alt={name} 
                width={imageSize} 
                height={imageSize} 
                className="relative z-30"
            />
        </ArtifactDisplay>
    )
}