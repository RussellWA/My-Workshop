import { ArcaneSignature } from "@/types/Item";

export const INVENTIONS = [
    {
        id: crypto.randomUUID(),
        slug: "corpus-aegis",
        name: "Corpus Aegis",
        type: "Wondrous Item",
        signature: "arcane" as ArcaneSignature,
        image: "/corpusAegis.png",
        imageSize: 180,

        attunement: false,
        quote: "A shield that bends magic itself.",
        description: "",
        mechanics: [
            {
                title: "",
                body: "",
            }
        ],
        lore: "",
        dmNotes: "",
    },
    {
        id: crypto.randomUUID(),
        slug: "animus-ardor",
        name: "Animus Ardor",
        type: "Weapon",
        signature: "fire" as ArcaneSignature,
        image: "/animusArdor.png",
        imageSize: 250,

        attunement: true,
        quote: "",
        description: "",
        mechanics: [
            {
                title: "",
                body: "",
            }
        ],
        lore: "",
        dmNotes: "",
    },
    {
        id: crypto.randomUUID(),
        slug: "pneuma-sanctus",
        name: "Pneuma Sanctus",
        type: "Wondrous Item",
        signature: "arcane" as ArcaneSignature,
        image: "/pneumaSanctus-v3.png",
        imageSize: 170,

        attunement: true,
        quote: "",
        description: "",
        mechanics: [
            {
                title: "",
                body: "",
            }
        ],
        lore: "",
        dmNotes: "",
    },
    {
        id: crypto.randomUUID(),
        slug: "nihil-singularis",
        name: "Nihil Singularis",
        type: "Wondrous Item",
        signature: "necrotic" as ArcaneSignature,
        image: "/nihilSingularis-v3.png",
        imageSize: 200,

        attunement: true,
        quote: "",
        description: "",
        mechanics: [
            {
                title: "",
                body: "",
            }
        ],
        lore: "",
        dmNotes: "",
    },
];