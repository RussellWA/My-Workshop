export type ArcaneSignature =
    | "arcane"
    | "fire"
    | "holy"
    | "frost"
    | "poison"
    | "necrotic";

export const SIGNATURES = {
    arcane: {
        text: "text-cyan-100",
        glow: "bg-cyan-400",
        core: "bg-cyan-500/40",
    },

    fire: {
        text: "text-orange-300",
        glow: "bg-orange-400",
        core: "bg-orange-500/40",
    },

    holy: {
        text: "text-yellow-200",
        glow: "bg-yellow-300",
        core: "bg-yellow-400/40",
    },

    frost: {
        text: "text-sky-200",
        glow: "bg-sky-300",
        core: "bg-sky-400/40",
    },

    poison: {
        text: "text-green-300",
        glow: "bg-green-400",
        core: "bg-green-500/40",
    },

    necrotic: {
        text: "text-violet-200",
        core: "bg-violet-600/40",
        glow: "bg-violet-500",
    },
} as const;

export interface Invention {
    id: string;
    slug: string;

    name: string;
    image: string;

    type: string;

    attunement: boolean;

    quote: string;

    description: string;

    lore: string;

    dmNotes: string;

    mechanics: Mechanic[];
}

interface Mechanic {
    title: string;
    body: string;
}