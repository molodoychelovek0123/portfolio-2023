
import { useState, useEffect } from "react";

export default function useWindowSize() {
    if (typeof window !== "undefined") {
        const getSize = () => {
            return {
                width: window.innerWidth,
                height: window.innerHeight,
            };
        };

        const [windowSize, setWindowSize] = useState(getSize);

        useEffect(() => {
            const handleResize = () => {
                setWindowSize(getSize());
            };

            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }, []);

        return windowSize;
    }
    else{
        return {width: 0, height: 0};
    }
}