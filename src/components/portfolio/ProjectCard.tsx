import React from 'react';
import {InView} from "react-intersection-observer"
import {Grain} from "@/components/grain/Grain"

import styles from './ProjectCard.module.scss';

import Apple from '@/static-content/apple.svg';
import Next from '@/static-content/next.svg';
import image from "@/static-content/about.jpg";
import Image from "next/image";
import {StaticImport} from "next/dist/shared/lib/get-img-props";

const LARGE_CARD = "md:col-span-2 md:row-span-2";
const MEDIUM_CARD = "md:col-span-2 md:row-span-1";
const SMALL_CARD = "md:col-span-1 md:row-span-1";

export enum Technologies {
    apple = Apple,
    next = Next,
    js = Apple,
    ts = Apple,
    tina = Apple,
    tailwind = Apple,
    react = Apple,
    liquid = Apple,
    shopify = Apple,
    sass = Apple,
    php = Apple,
    gsap = Apple,
    squarespace = Apple,
    tilda = Apple,
}

export type ProjectProps = {
    title: string;
    description?: string;
    image?: string | StaticImport;
    links?: {
        text: string;
        url: string;
    }[];
    technologies?: Technologies[];
    cardType?: "large" | "medium" | "small";
    customClassNames?: {
        title?: string;
        description?: string;
        image?: string;
        links?: string;
        technologies?: string;
        bottomIndent?: string; // Use tailwind classes for bottom indent (for example .mb-8)
    }
}

export const ProjectCard = ({title, description, image, links,technologies, cardType, customClassNames}: ProjectProps) => {
    // @ts-ignore
    return (
        <>

            <InView triggerOnce threshold={0.2}>

                {({inView, ref}) => (
                    <div
                        className={`relative rounded-card ${styles.card} ${cardType === "large" ? LARGE_CARD : cardType === "medium" ? MEDIUM_CARD : SMALL_CARD} transition-opacity duration-700 ease-in-out ${inView ? "opacity-100" : "opacity-0"}`}
                        ref={ref}>
                        <div className="grain">
                        <Grain/>
                        </div>
                        <div
                            className="w-full h-full rounded-card overflow-hidden border  border-outline p-4 md:p-6 xl:p-8 pr-6 xl:pr-11">
                            <h3 className={`responsive_text font-title leading-title ${customClassNames ? customClassNames.title : ""}`}
                                style={{
                                    "--small-size": "25",
                                    "--phone-size": "35",
                                    "--tablet-size": "40",
                                    "--desktop-size": "46"
                                } as React.CSSProperties}> {title} </h3>
                            <p className={`mt-2.5 text-descriptionColor text-xs md:text-sm xl:text-base leading-description  ${customClassNames ? customClassNames.description : ""}`}>{description}</p>
                            <ul className="flex flex-wrap gap-4 md:gap-5 xl:gap-6 my-8">
                                {links?.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.url} target="_blank" rel="noreferrer"
                                           className={`text-descriptionColor text-xs md:text-sm xl:text-base leading-description  ${customClassNames ? customClassNames.links : ""}`}>
                                            {link.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <ul className={`flex flex-wrap gap-3 md:gap-4 xl:gap-5 ${customClassNames? customClassNames.bottomIndent : "mb-20 md:mb-14"}`}>
                                {technologies?.map((image, index) => (
                                    <li key={index} className="">
                                        {/*@ts-ignore*/}
                                        <Image src={image} alt={`${title} - Technologies ${index}`} className={`rounded-full h-12 w-12 md:h-14 md:w-14 xl:h-16 xl:w-16 ${customClassNames ? customClassNames.technologies : ""}`}/>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>
                )}
            </InView>
        </>
    );
}