interface SectionHeadingProps {
    children: React.ReactNode;
}

export default function SectionHeading({
    children,
}: SectionHeadingProps) {
    return (
        <>
            <h2 className="font-heading text-2xl mb-2">
                {children}
            </h2>
            <div className="w-12 h-px bg-accent mb-6" />
        </>
    );
}