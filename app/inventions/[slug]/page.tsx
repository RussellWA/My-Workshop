interface InventionPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function InventionPage({ params }: InventionPageProps) {
    const { slug } = await params;

    return (
        <main className="py-20">
            <h1 className="font-heading text-5xl">
                {slug}
            </h1>

            <p className="mt-4 text-zinc-400">
                This page is under construction.
            </p>
        </main>
    );
}