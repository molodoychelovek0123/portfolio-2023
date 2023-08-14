import React from 'react';

export const Overlay = () => {
    return (
        <>
            <div
                className="fixed inset-0 p-1 w-moreDisplay h-display backdrop-blur-[8px] pointer-events-none z-50 opacity-1 overlay-mask"
            ></div>
            <div
                className="fixed inset-0 p-1 w-moreDisplay h-display bg-gradient-to-t from-bg-dark to-transparent opacity-40 pointer-events-none z-40"
            ></div>
        </>
    );
}