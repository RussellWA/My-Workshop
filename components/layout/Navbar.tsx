

export default function Navbar() {
    return (
        <div className="flex justify-around items-center py-3">
            <a href="" className="text-xl">
                Arcane Workshop
            </a>
            <div className="flex gap-5 text-lg">
                <a 
                    href="" 
                    className="nav-link"
                >
                    Inventions
                </a>
                <a 
                    href="" 
                    className="nav-link"
                >
                    About
                </a>
            </div>
        </div>
    )
}