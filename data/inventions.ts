import { ArcaneSignature, Invention } from "@/types/Item";

export const INVENTIONS: Invention[] = [
    {
        id: crypto.randomUUID(),
        slug: "corpus-aegis",
        name: "Corpus Aegis",
        type: "Wondrous Item",
        signature: ArcaneSignature.Arcane,
        image: "/corpusAegis-v1.png",
        imageSize: 180,

        attunement: false,
        quote: "The strongest shield is the one already waiting when the blow arrives.",
        description: [
            "Corpus Aegis is a defensive module that converts stored arcane energy into protective barriers. Mounted directly to a shield or breastplate, it allows its bearer to answer danger with bursts of magical protection.",
            "Unlike conventional enchanted equipment, Corpus Aegis contains no inherent magic of its own. Instead, it must first be Primed by an artificer before its defensive functions become available."
        ],
        mechanics: [
            {
                title: "Arcane Barrier",
                tags: ["Bonus Action", "1 Charge"],
                summary: "Project a force field for 2 minutes (no concentration). You gain +2 AC and resistance to physical attacks."
            },
            {
                title: "Recharge",
                tags: ["Short Rest", "Spell Slot"],
                summary: "Regain 1 charge on a Short Rest, or instantly by expending a 1st-level spell slot. The item's creator can prime this device without expending a slot."
            },
        ],
        creatorJournal: [
            { day: 3, entry: "My Fighter (V) requested deceptively simple item. She wants more protection without turning herself into an immovable fortress. A body shield, Corpus Aegis." },
            { day: 5, entry: "I finished it. A compact converter, capable of storing and releasing defensive arcane energy on demand. With this device, she can keep the enemies away from me while I cast spells on a safe distance." },
            { day: 18, entry: "Turns out V hid the fact that she was a dhampir. After confronting, she revealed the truth without hesitation. I will still entrust this device to her, she is the party's power house after all" },
            { day: 23, entry: "I DID IT!! Just a few tweaks and combine with the Pneuma Sanctus' Closed Loop mechanic, I'm able to make the shield self sufficient and able to protect the whole village (Arvik Village). I shall call it the Arcane Dome." },
            { day: 30, entry: "I'm able to make another Arcane Dome for the Martikov's Winery. Still needs improvements, but its good enough to protect the area. I hope I can make this for other villages while perfecting it." }
        ],
        designNotes: [
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
        signature: ArcaneSignature.Fire,
        image: "/animusArdor.png",
        imageSize: 250,

        attunement: true,
        quote: "Power is borrowed. Resolve belongs to the wielder.",
        description: [
            "Animus Ardor is a silvered longsword that blends traditional craftsmanship with arcane engineering. Fitted with an Arcane Cell, the weapon is capable of becoming a devastating force on the battlefield.",
            "Unlike conventional enchanted weapons, Animus Ardor contains no inherent magic of its own. Instead, it must first be Primed by its Artificer creator before its offensive capabilities can be unleashed."
        ],
        mechanics: [
            {
                title: "Arcane Ignition",
                tags: ["Bonus Action", "1 Charge"],
                summary: "Ignite the blade with magical flames for 1 minute (no concentration). Attacks deal an additional 1d8 Fire damage."
            },
            {
                title: "Animus Resonance",
                tags: ["Bonus Action", "Cost: 1d8 HP", "Requires Attunement"],
                summary: "Take 1d8 Necrotic damage to synchronize with the blade for 1 minute. You use Charisma instead of Strength for attack and damage rolls."
            },
            {
                title: "Crimson Nova",
                tags: ["Special Action", "Cost: 2d8 HP"],
                summary: "Overcharge the Arcane Cell by taking 2d8 Necrotic damage. For 1 minute, the blade deals an additional 1d8 Fire damage plus your Spellcasting modifier."
            },
            {
                title: "Recharge",
                tags: ["Long Rest", "Spell Slot"],
                summary: "Regain 1d4 charges on a Long Rest, or instantly by expending a 1st-level spell slot. The item's creator can prime this device without expending a slot."
            }
        ],
        creatorJournal: [
            { day: 6, entry: "My Paladin (Saltus) requested a robust weapon. He wanted a blade capable of burning Barovia's undead to ash without relying on a permanent magical enchantment. I probably should just use his longsword and attach an Arcane Cell." },
            { day: 10, entry: "I've finished the weapon, Animus Ardor. A silvered weapon that has a burst of fire. I hope he won't have to use the Animus Resonance too much, it hurts quite a bit." },
            { day: 18, entry: "THIS THING IS UNDERPOWERED. I have to give it more destructive power. I'll get to it after I finish Euphy's device." },
            { day: 31, entry: "I keep forgetting to upgrade the sword because of the chaos. I should be able to inspect the sword while Sal guards the camp." }
        ],
        designNotes: [
            "Modify duration, maximum prime charges, and damage roll depending on campaign difficulty",
            "Drawback of Animus Resonance and Crimson Nova can be modified",
            "Damage type can be changed to anything other than fire, but only a single element",
            "Preferably not change modifier other than Charisma",
            "Silvered weapon can be modified into a normal weapon",
            "DO NOT MAKE IT REQUIRE CONCENTRATION, thank you :D",
        ],
    },
    {
        id: crypto.randomUUID(),
        slug: "pneuma-sanctus",
        name: "Pneuma Sanctus",
        type: "Wondrous Item",
        signature: ArcaneSignature.Holy,
        image: "/pneumaSanctus-v3.png",
        imageSize: 165,

        attunement: true,
        quote: "Life is the most fragile resource on the battlefield. It deserves the finest engineering.",
        description: [
            "Pneuma Sanctus is a wearable life support module that converts stored arcane energy into restorative bio magical mist. Mounted directly to a chestplate, it continuously sustains nearby allies with controlled bursts of healing and protection.",
            "Unlike conventional enchanted relics, Pneuma Sanctus contains no inherent divine magic of its own. Instead, it relies on a Closed Loop Reactor that must first be Primed by its Artificer creator before its restorative functions become available."
        ],
        mechanics: [
            {
                title: "Nebula Dispersal",
                tags: ["Bonus Action", "1 Charge"],
                summary: "Release a restorative mist for 1 minute (no concentration). Upon activation, choose a mode: Aegis (allies gain 1d8 + WIS Temp HP at the start of their turn) or Remedy (allies below half HP regain 1d4 + WIS HP at the start of their turn)."
            },
            {
                title: "Purifying Radiance",
                tags: ["Passive Effect"],
                summary: "While Nebula Dispersal is active, any Undead, Fiend, or Shapechanger that starts its turn in the mist takes Radiant damage equal to your Wisdom modifier."
            },
            {
                title: "Lazarus Protocol",
                tags: ["No Action", "1 Charge", "Requires Attunement"],
                summary: "If you would drop to 0 Hit Points, the device automatically expends a charge to drop you to 1 Hit Point instead."
            },
            {
                title: "Recharge",
                tags: ["Long Rest"],
                summary: "The device automatically restores all 4 charges at the end of a Long Rest."
            }
        ],
        creatorJournal: [
            { day: 10, entry: "My Cleric (Euphylia) requested a device. She wanted to keep us alive without relying solely on conventional divine magic." },
            { day: 14, entry: "Took me a while to understand Dweomer, but I finished it. A wearable reactor capable of storing and releasing restorative bio magical mist on demand. The Pneuma Sanctus." },
            { day: 17, entry: "This device has negative affects towards vampires. While battling, I saw V's body having a negative reaction towards the mist. I have to confront her when she wakes up." },
            { day: 20, entry: "Now that I think of it, I can apply the Closed Loop mechanic from this device to other inventions, making them self sufficient. I can't have them bothering me during my rest anyways." }
        ],
        designNotes: [
            "Modify duration, maximum prime charges, and heal, also damage roll depending on campaign difficulty",
            "Preferably not change modifier other than Wisdom",
            "DO NOT MAKE IT REQUIRE CONCENTRATION, thank you :D",
        ],
    },
    {
        id: crypto.randomUUID(),
        slug: "nihil-singularis",
        name: "Nihil Singularis",
        type: "Wondrous Item",
        signature: ArcaneSignature.Necrotic,
        image: "/nihilSingularis-v4.png",
        imageSize: 195,

        attunement: true,
        quote: "There is no such thing as harmless power. Only controlled catastrophe.",
        description: [
            "Nihil Singularis is a wearable casting accelerator that condenses stored Pact Magic into devastating singularity based spellcasting. Mounted as an articulated gauntlet, it amplifies the wielder's magical output through precision engineered arcane acceleration.",
            "Unlike conventional arcane foci, Nihil Singularis possesses no inherent magical power of its own. Instead, its crystalline core must first be Charged by its wearer before its high output casting functions become available."
        ],
        mechanics: [
            {
                title: "Singularity Shot",
                tags: ["Action", "1 Charge", "Requires Attunement"],
                summary: "Compress Eldritch Blast into a single attack roll dealing the combined damage of all beams, plus an extra 1d10 Force damage per beam. Recoil Overload: Until the start of your next turn, your Speed becomes 0 and you cannot take Reactions."
            },
            {
                title: "Recharge",
                tags: ["Short Rest", "Cost: 1 Hit Die"],
                summary: "Expend one of your own Hit Dice during a Short Rest to stabilize the gyroscopic core and regain 2 charges."
            }
        ],
        creatorJournal: [
            {
                day: 20,
                entry: "My Warlock (Ponzi) requested a device. He wanted something that can enhance his Eldritch Blast."
            },
            {
                day: 24,
                entry: "The Nihil Singularis, a device that uses Kinetic Accelerator. With this he should finally be a destructive force along with V."
            },
            {
                day: 25,
                entry: "I shall take back this device, for he has betrayed you and your party. Alberon, my brother, I will avenge you. - Mikhail"
            }
        ],
        designNotes: [
            "Modify recharge resource, damage roll, and side effects depending on campaign difficulty",
            "DO NOT MAKE IT REQUIRE CONCENTRATION, thank you :D",
        ],
    },
]