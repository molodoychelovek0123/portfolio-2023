import React from "react";


export const Grain = () => {
    const viewBox = "0 0 300 300";

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox={viewBox}
            preserveAspectRatio="none"
        >
            <filter id="noiseFilter">
                <feTurbulence
                    type="fractalNoise"
                    baseFrequency="9"
                    numOctaves={5}
                />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)"/>
        </svg>
    );
};

