import React from 'react';
import {InView} from "react-intersection-observer";
import {Technologies} from "@/components/technologies/Technologies";
import Image from "next/image";


type ToolsRowProps = {
    title: string;
    items: {
        name: string;
        icon: Technologies
    }[];
}

export const ToolsRow = ({title, items}: ToolsRowProps) => {

    return (
        <>

            <InView triggerOnce threshold={0.2}>

                {({inView, ref}) => (

                    <div ref={ref}
                         className={` transition-opacity duration-700 ease-in-out mb-10 ${inView ? "opacity-100" : "opacity-0"}`}>
                        <h4 className="font-title leading-title font-bold text-base md:text-lg xl:text-xl mb-2 md:mb-2.5 xl:mb-4">{title}</h4>
                        <div className="flex flex-wrap gap-4 md:gap-5 xl:gap-6">
                            {items.map((item, index) => (
                                <React.Fragment key={index}>
                                    {/* @ts-ignore I can't get Techonologies to be type StaticImport*/}
                                    <Image src={item.icon} alt={`${title} tool ${index} - ${item.name}`}
                                           height={60}
                                           width={60}
                                           className="rounded-full h-12 w-12 md:h-14 md:w-14 xl:h-16 xl:w-16"
                                           data-blobity-tooltip={item.name}
                                    />

                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                )}
            </InView>
        </>
    )
}