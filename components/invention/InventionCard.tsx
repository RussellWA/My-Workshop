import { ArcaneSignature } from "@/types/Item";
import ArtifactDisplay from "./ArtifactDisplay";
import Image from "next/image";

interface InventionCardProps {
    name: string;
    type: string;
    signature: ArcaneSignature;
    image: string;
}

export default function InventionCard({name, type, signature, image}: InventionCardProps) {
    return (
        <ArtifactDisplay name={name} type={type} signature={signature}>
            <Image 
                src={image} 
                alt={name} 
                width={130} 
                height={130} 
                className="relative z-30"
            />
        </ArtifactDisplay>
    )
}