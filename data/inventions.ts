import { ArcaneSignature, Invention } from "@/types/Item";

export const INVENTIONS: Invention[] = [
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
        description: [
            "Corpus Aegis is a defensive module that converts stored arcane energy into protective barriers. Mounted directly to a shield or breastplate, it allows its bearer to answer danger with bursts of magical protection.",

            "Unlike conventional enchanted equipment, Corpus Aegis contains no inherent magic of its own. Instead, it must first be Primed by an artificer before its defensive functions become available."
        ],
        mechanics: [
            {
                title: "Priming",
                tags: ["Passive"],
                summary:  "Only the creator can Prime Corpus Aegis without using spell slot.",
            },
            {
                title: "Activation",
                tags: ["Bonus Action", "Consumes Charge"],
                summary: "Consume 1 Prime Charge to activate the barrier.",
            },
            {
                title: "Arcane Barrier",
                tags: ["2 Minutes", "+2 AC", "Physical Atk Resistance", "No Concentration"],
                summary: "A protective force field surrounds the wearer for 2 minutes.",
            },
            {
                title: "Recharge",
                tags: ["Short Rest", "1st-Level Spell Slot"],
                summary: "Restore 1 Prime Charge during a Short Rest or by expending a 1st-level spell slot.",
            },
        ],
        workshopNotes: [
            "The request was deceptively simple: create something give more protection to its bearer without turning them into an immovable fortress. Rather than forging another enchanted shield, I pursued a different approach.",
            "The result is a compact converter, capable of storing and releasing defensive arcane energy on demand. It is called the Corpus Aegis"
        ],
        dmNotes: [
            "Modify the duration and AC bonus depending on campaign difficulty",
            "Activation can be modified to Reaction instead of Bonus Action",
            "Prime Charge quantity can be increased, though not recommendable",
            "Resistance type can be modified or removed",
            "DO NOT MAKE IT REQUIRE CONCENTRATION, thank you :D",
        ],
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
        description: [],
        mechanics: [],
        dmNotes: [""],
        workshopNotes: [],
    },
    {
        id: crypto.randomUUID(),
        slug: "pneuma-sanctus",
        name: "Pneuma Sanctus",
        type: "Wondrous Item",
        signature: "arcane" as ArcaneSignature,
        image: "/pneumaSanctus-v3.png",
        imageSize: 165,

        attunement: true,
        quote: "",
        description: [],
        mechanics: [],
        dmNotes: [""],
        workshopNotes: [],
    },
    {
        id: crypto.randomUUID(),
        slug: "nihil-singularis",
        name: "Nihil Singularis",
        type: "Wondrous Item",
        signature: "necrotic" as ArcaneSignature,
        image: "/nihilSingularis-v4.png",
        imageSize: 195,

        attunement: true,
        quote: "",
        description: [],
        mechanics: [],
        dmNotes: [""],
        workshopNotes: [],
    },
]