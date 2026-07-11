export enum ArcaneSignature {
    Arcane = "Arcane",
    Fire = "Fire",
    Holy = "Holy",
    Necrotic = "Necrotic",
}

export const SIGNATURE_THEME = {
    [ArcaneSignature.Arcane]: {
        text: "text-cyan-400",
        textGlow: "drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]",

        border: "border-cyan-500/40",
        divider: "bg-cyan-400",
        pill: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/30",
        button: "border-cyan-500 text-cyan-300 hover:bg-cyan-500 hover:text-zinc-950",

        heroGlow: "bg-cyan-400/30",
        imageGlow: "drop-shadow-[0_0_20px_rgba(34,211,238,0.45)]",

        coreGlow: "shadow-[0_0_35px_rgba(34,211,238,0.9)]",
        coreGlowBackground: "bg-cyan-300",
        ambientGlow: "bg-[radial-gradient(circle_at_50%_20%,rgba(34,211,238,0.08),rgba(34,211,238,0.04),transparent_70%)]"
    },

    [ArcaneSignature.Fire]: {
        text: "text-orange-400",
        textGlow: "drop-shadow-[0_0_8px_rgba(251,146,60,0.8)]",

        border: "border-orange-500/40",
        divider: "bg-orange-400",
        pill: "bg-orange-500/10 text-orange-300 border border-orange-500/30",
        button: "border-orange-500 text-orange-300 hover:bg-orange-500 hover:text-zinc-950",

        heroGlow: "bg-orange-400/30",
        imageGlow: "drop-shadow-[0_0_20px_rgba(251,146,60,0.45)]",

        coreGlow: "shadow-[0_0_35px_rgba(251,146,60,0.9)]",
        coreGlowBackground: "bg-orange-300",
        ambientGlow: "bg-[radial-gradient(circle_at_50%_20%,rgba(251,146,60,0.08),rgba(251,146,60,0.04),transparent_70%)]"
    },

    [ArcaneSignature.Holy]: {
        text: "text-amber-200",
        textGlow: "drop-shadow-[0_0_8px_rgba(253,224,71,0.8)]",

        border: "border-amber-300/40",
        divider: "bg-amber-200",
        pill: "bg-amber-100/10 text-amber-100 border border-amber-300/30",
        button: "border-amber-300 text-amber-100 hover:bg-amber-200 hover:text-zinc-950",

        heroGlow: "bg-amber-200/25",
        imageGlow: "drop-shadow-[0_0_20px_rgba(253,224,71,0.45)]",

        coreGlow: "shadow-[0_0_35px_rgba(253,224,71,0.9)]",
        coreGlowBackground: "bg-amber-200",
        ambientGlow: "bg-[radial-gradient(circle_at_50%_20%,rgba(250,245,200,0.08),rgba(255,255,255,0.04),transparent_70%)]"
    },

    [ArcaneSignature.Necrotic]: {
        text: "text-violet-400",
        textGlow: "drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]",

        border: "border-violet-500/40",
        divider: "bg-violet-400",
        pill: "bg-violet-500/10 text-violet-300 border border-violet-500/30",
        button: "border-violet-500 text-violet-300 hover:bg-violet-500 hover:text-zinc-950",

        heroGlow: "bg-violet-500/30",
        imageGlow: "drop-shadow-[0_0_20px_rgba(168,85,247,0.45)]",

        coreGlow: "shadow-[0_0_35px_rgba(168,85,247,0.9)]",
        coreGlowBackground: "bg-violet-400",
        ambientGlow: "bg-[radial-gradient(circle_at_50%_20%,rgba(168,85,247,0.09),rgba(139,92,246,0.04),transparent_70%)]"
    },
};

export interface Invention {
    id: string;
    slug: string;

    name: string;
    image: string;

    type: string;
    signature: ArcaneSignature;
    imageSize: number;

    attunement: boolean;

    quote: string;

    description: string[];
    
    mechanics: Mechanic[];
    designNotes: string[];
    creatorJournal: CreatorJournal[];
}

export interface CreatorJournal { 
    day: number;
    entry: string 
}

export interface Mechanic {
    title: string;
    summary: string;
    tags: string[];
}