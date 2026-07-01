import { ArcaneSignature } from "@/types/Item";

export const INVENTIONS = [
    {
        id: crypto.randomUUID(),
        slug: "corpus-aegis",
        name: "Corpus Aegis",
        type: "Wondrous Item",
        signature: "arcane" as ArcaneSignature,
        image: "/shield.png",
        imageSize: 80,
    },
    {
        id: crypto.randomUUID(),
        slug: "animus-ardor",
        name: "Animus Ardor",
        type: "Weapon",
        signature: "fire" as ArcaneSignature,
        image: "/sword.png",
        imageSize: 130,
    },
];