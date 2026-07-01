"use client";

import { ArcaneSignature } from "@/types/Item";
import Image from "next/image";
import Link from "next/link";
import ArtifactDisplay from "./ArtifactDisplay";

interface InventionCardProps {
    name: string;
    type: string;
    slug: string;
    signature: ArcaneSignature;
    image: string;
    imageSize: number;
}

export default function InventionCard({name, type, slug, signature, image, imageSize}: InventionCardProps) {
    return (
        <Link href={`/inventions/${slug}`}>
            <ArtifactDisplay name={name} type={type} signature={signature}>
                <Image 
                    src={image} 
                    alt={name} 
                    width={imageSize} 
                    height={imageSize} 
                    className="relative z-30"
                />
            </ArtifactDisplay>
        </Link>
    )
}