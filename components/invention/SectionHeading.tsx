interface SectionHeadingProps {
    divider: string;
    children: React.ReactNode;
}

export default function SectionHeading({
    divider,
    children,
}: SectionHeadingProps) {
    return (
        <>
            <h2 className="font-heading text-2xl mb-2">
                {children}
            </h2>
            <div className={`w-12 h-px mb-6 ${divider}`} />
        </>
    );
}