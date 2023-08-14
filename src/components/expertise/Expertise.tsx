import React from 'react';
import {AnimatedTextWord} from "@/components/animation/AnimatedTextWord";
import {InView} from "react-intersection-observer"
import useTranslation from "next-translate/useTranslation";

export const Expertise = () => {

    const {t} = useTranslation();
    return (
        <InView triggerOnce threshold={1}>
            {({inView, ref}) => (
                <div className="container mt-44" ref={ref}>
                    <div className=" max-w-2.5xl">
                    <AnimatedTextWord className="font-title text-4xl md:text-title leading-title mb-5 md:mb-6 xl:mb-8 flex flex-wrap"
                                      text={t("expertise:title")}/>
                    <p className={`leading-description text-base md:text-lg xl:text-2xl transition-opacity duration-700 ease-in-out  ${inView ? "opacity-100" : "opacity-0"}`}>
                        {
                            t('expertise:description').split('\n').map((item, index) =>
                                <React.Fragment key={index}>{index !== 0 && <br/>}{item}</React.Fragment>
                            )
                        }
                         </p>
                    </div>
                </div>
            )}
        </InView>
    );
}