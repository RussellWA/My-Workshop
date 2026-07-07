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
                title: "Priming",
                tags: ["Passive"],
                summary: "Only the creator can Prime the device without using spell slot.",
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
                tags: ["Short Rest", "1st Level Spell Slot"],
                summary: "Restore 1 Prime Charge during a Short Rest or by expending a 1st level spell slot.",
            },
        ],
        workshopNotes: [
            "My Fighter requested deceptively simple item. She wants more protection without turning herself into an immovable fortress. Rather than forging another enchanted shield, I pursued a different approach.",
            "The result is a compact converter, capable of storing and releasing defensive arcane energy on demand. It is called the Corpus Aegis.",
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
                title: "Priming",
                tags: ["Passive", "4 Charges"],
                summary: "Only the creator can Prime the weapon without using spell slot.",
            },
            {
                title: "Arcane Ignition",
                tags: ["Bonus Action", "Consumes 1 Charge", "1 Minute"],
                summary: "Ignite the blade with magical flames. While active, attacks deal an additional 1d8 Fire damage. This effect requires no Concentration.",
            },
            {
                title: "Animus Resonance",
                tags: ["Attuned", "Bonus Action", "1d4 Necrotic", "1 Minute"],
                summary: "Synchronize with the blade to attack using Charisma instead of Strength. Successful hits deal your normal longsword damage plus your Charisma modifier.",
            },
            {
                title: "Crimson Nova",
                tags: ["Attuned", "2d8 Necrotic", "1 Minute"],
                summary: "Overcharge the Arcane Cell by sacrificing your life force. While active, the blade deals an additional 1d8 Fire damage plus your Spellcasting modifier.",
            },
            {
                title: "Recharge",
                tags: ["Long Rest", "1st Level Spell Slot"],
                summary: "Restore 1d4 Prime Charges during a Long Rest or by expending a 1st level spell slot.",
            },
        ],
        workshopNotes: [
            "My Paladin requested a robust weapon. He wanted a blade capable of burning Barovia's undead to ash without relying on a permanent magical enchantment. Rather than forging an entirely new weapon, I chose to enhance his trusted silvered longsword with an Arcane Cell.",
            "The result is a silvered weapon capable of storing and unleashing concentrated arcane fire on demand. Through further refinement, the design evolved to resonate with its wielder, rewarding those willing to sacrifice their own vitality in exchange for overwhelming offensive power. It is called the Animus Ardor.",
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
                title: "Priming",
                tags: ["Passive", "4 Charges"],
                summary: "The device is able to recharge during a long rest on its own.",
            },
            {
                title: "Nebula Dispersal",
                tags: ["Bonus Action", "Consumes 1 Charge", "1 Minute"],
                summary: "Release a cloud of restorative mist that lingers. The mist requires no Concentration and affects both allies and hostile creatures depending on the selected mode.",
            },
            {
                title: "Aegis Mode",
                tags: ["Temporary HP"],
                summary: "The mist condenses into a protective barrier. Allies within the cloud gain 1d8 + your Wisdom modifier as Temporary Hit Points at the start of their turn.",
            },
            {
                title: "Remedy Mode",
                tags: ["Healing"],
                summary: "The mist accelerates natural recovery. Allies below half of their maximum Hit Points regain 1d4 + your Wisdom modifier Hit Points at the start of their turn.",
            },
            {
                title: "Purifying Mist",
                tags: ["Passive", "Undead", "Radiant"],
                summary: "Undead, Fiends, and Shapechangers that begin their turn within the mist take Radiant damage equal to your Wisdom modifier.",
            },
            {
                title: "Lazarus Protocol",
                tags: ["Attuned", "Passive"],
                summary: "While attuned, the device automatically expends a stored Charge when you would drop to 0 Hit Points, immediately restoring you to 1 Hit Point. This feature cannot activate if the reactor has no remaining Charges.",
            },
        ],
        workshopNotes: [
            "My Cleric requested a device. She wanted to keep her companions alive without relying solely on conventional divine magic. Rather than creating another enchanted relic, I pursued a different approach.",
            "The result is a wearable reactor capable of storing and releasing restorative bio magical mist on demand. Through interchangeable operating modes, it can adapt to the changing needs of the battlefield. It is called the Pneuma Sanctus.",
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
                title: "Priming",
                tags: ["Long Rest", "1st Level Spell Slot", "2 Charges"],
                summary: "At the end of a Long Rest, expend one 1st level spell slot to stabilize the Eldritch Crystal and replenish 2 Charges. Once Primed, the device remains operational until the next dawn.",
            },
            {
                title: "Singularity Shot",
                tags: ["Attuned", "Eldritch Blast", "Force Damage"],
                summary: "Compress every beam of Eldritch Blast into a single unstable singularity. Make one Spell Attack Roll that deals the combined damage of all beams, plus an additional 1d10 Force damage for each beam combined.",
            },
            {
                title: "Thermal Lockout",
                tags: ["Passive", "Speed 0", "No Reactions"],
                summary: "The immense recoil overloads the gyroscopic core after each Singularity Shot. Until the start of your next turn, your Speed becomes 0 and you cannot take Reactions.",
            },
        ],
        designNotes: [""],
        workshopNotes: [],
    },
]