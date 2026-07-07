interface DetailDividerProps {
    color: string;
}

export default function DetailDivider({color}: DetailDividerProps) {
    return (
        <div className="relative flex items-center justify-center">
            <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-600 to-transparent" />
            <div className={`absolute w-2 h-2 rotate-45 shadow-[0_0_10px_#06b6d4] ${color}`}/>
        </div>
    )
}