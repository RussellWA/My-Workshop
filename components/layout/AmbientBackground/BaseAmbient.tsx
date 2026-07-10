"use client";

export default function BaseAmbient() {

    return (
        <>
            {/* Vignette */}
            <div
                className="
                    fixed
                    inset-0
                    -z-50
                    pointer-events-none
                    bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.18)_70%,rgba(0,0,0,0.45)_100%)]
                "
            />

            {/* Workshop Spotlight */}
            <div
                className="
                    fixed
                    inset-0
                    -z-40
                    pointer-events-none
                    bg-[radial-gradient(circle_at_50%_18%,rgba(255,248,235,0.05),transparent_65%)]
                "
            />
        </>
    );
}