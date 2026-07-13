import AboutHero from "@/components/about/AboutHero";
import BaseAmbient from "@/components/layout/AmbientBackground/BaseAmbient";


export default function About() {
    return (
        <main className="relative overflow-x-hidden">
            <BaseAmbient />
            <AboutHero />
        </main>
    )
}