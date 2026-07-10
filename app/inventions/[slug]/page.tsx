import DetailDocs from "@/components/invention/DetailDocs";
import DetailHero from "@/components/invention/DetailHero";
import DetailInfo from "@/components/invention/DetailInfo";
import SignatureAmbient from "@/components/layout/AmbientBackground/SignatureAmbient";
import AmbientBackground from "@/components/layout/AmbientBackground/SignatureAmbient";
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
        <main className="relative overflow-x-hidden">
            {item && (
                <>
                    <SignatureAmbient signature={item.signature} />
                    <div className="flex flex-col gap-10 md:gap-20">
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
                        <section className="mx-auto mt-12 md:mt-24 max-w-3xl border-t border-zinc-800/70 pt-8">
                            <div className="space-y-3 text-center">
                                <h3 className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">
                                    Illustration Notice
                                </h3>

                                <p className="text-xs md:text-sm leading-7 text-zinc-500">
                                    I'm not an illustrator, so the artwork throughout Arcane Workshop is AI generated to help visualize my original inventions.
                                </p>
                            </div>
                        </section>
                    </div>
                </>
            )}
        </main>
    );
}