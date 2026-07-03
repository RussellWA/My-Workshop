import DetailHero from "@/components/invention/DetailHero";
import DetailInfo from "@/components/invention/DetailInfo";
import { INVENTIONS } from "@/data/inventions";

interface InventionPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function InventionPage({ params }: InventionPageProps) {
    const { slug } = await params;
    const item = INVENTIONS.find(i => i.slug == slug)

    return (
        <main>
            {item && (
                <>
                    <DetailHero 
                        name={item.name} 
                        type={item.type} 
                        attunement={item.attunement} 
                        quote={item.quote} 
                        image={item.image} 
                        imageSize={item.imageSize}
                        signature={item.signature}
                    />
                    <DetailInfo 
                        description={item.description} 
                        mechanics={item.mechanics} 
                        workshopNotes={item.workshopNotes} 
                        dmNotes={item.dmNotes}                        
                    />
                </>
            )}
        </main>
    );
}