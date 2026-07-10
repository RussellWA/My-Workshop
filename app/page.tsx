import HomeHero from "@/components/home/Hero";
import InventionGallery from "@/components/invention/InventionGallery";
import BaseAmbient from "@/components/layout/AmbientBackground/BaseAmbient";

export default function Home() {
    return (
        <>
            <BaseAmbient />
            <HomeHero />
            <InventionGallery />
        </>
    );
}
