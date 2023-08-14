import React from 'react';
import Link from 'next/link';

export type ButtonProps = {
    children: React.ReactNode,
    link: string,
    type?: "tall" | "wide",
    onClick?: () => void
}

export const Button = ({children, link , type = "wide", onClick}: ButtonProps) => {
    return (
        <Link data-no-blobity="true"
              className={`backdrop-blur-sm text-white bg-black bg-opacity-10 ${type === "tall" ? "py-2 px-10" : ""} ${type === "wide" ? "py-4 px-6" : ""} rounded-[50px] block text-lg transition-color duration-700 ease-in-out hover:bg-gradient-purple hover:text-[#ffffff99]`}
              href={link}
              onClick={onClick}>
            {children}
        </Link>
    )
}