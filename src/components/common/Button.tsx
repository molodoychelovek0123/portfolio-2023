import React from 'react';
import Link from 'next/link';

export type ButtonProps = {
    children: React.ReactNode,
    link: string,
    type?: "tall" | "wide",
    onClick?: () => void,
    dark?: boolean
}

export const Button = ({children, link , type = "wide", onClick, dark = true}: ButtonProps) => {
    return (
        <Link data-no-blobity="true"
              className={`backdrop-blur-sm text-white ${dark? "bg-black": "bg-white"}  bg-opacity-10 ${type === "tall" ? "py-2 px-10" : ""} ${type === "wide" ? "py-4 px-6" : ""} rounded-[50px] inline-block text-lg transition-colors duration-700 ease-in-out hover:bg-gradient-purple hover:text-[#ffffff99]`}
              href={link}
              onClick={onClick}>
            {children}
        </Link>
    )
}