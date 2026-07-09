import DetailDocs from "@/components/invention/DetailDocs";
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
                <div className="flex flex-col gap-20">
                    <DetailHero 
                        name={item.name} 
                        type={item.type} 
                        slug={item.slug}
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
                        designNotes={item.designNotes}      
                        signature={item.signature}                  
                    />
                    {/* <DetailDocs /> */}
                </div>
            )}
        </main>
    );
}