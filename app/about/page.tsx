import AboutHero from "@/components/about/AboutHero";
import AboutInfo from "@/components/about/AboutInfo";
import AboutPrinciples from "@/components/about/AboutPrinciples";
import AboutProcess from "@/components/about/AboutProcess";
import BaseAmbient from "@/components/layout/AmbientBackground/BaseAmbient";


export default function About() {
    return (
        <main className="relative overflow-x-hidden">
            <BaseAmbient />
            <AboutHero />
            <AboutInfo />
            <AboutPrinciples />
            <AboutProcess />
        </main>
    )
}