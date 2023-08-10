import React from 'react';
import Image from 'next/image';
import image from "@/static-content/about.jpg"
import {AnimatedTextWord} from "@/components/animation/AnimatedTextWord";
import useTranslation from 'next-translate/useTranslation';

export const About = () => {

    const {t} = useTranslation();
    return (
        <>
            <div
                className="container flex flex-col items-start gap-10 md:gap-12 md:flex-row mt-20 md:mt-24 xl:mt-28 ">
                <Image src={image} alt="Kirill Tatarinov - Web Developer" className="rounded-full"/>
                <div>
                    <AnimatedTextWord
                        className="font-title text-5xl md:text-title leading-title mb-5 md:mb-6 xl:mb-8 flex flex-wrap"
                        text={t('about:title')}/>
                    <p className="leading-description text-base md:text-lg xl:text-2xl">
                        {
                            t('about:description').split('\n').map((item, index) =>
                                <React.Fragment key={index}>{index !== 0 && <br/>}{item}</React.Fragment>
                            )
                        }
                    </p>

                </div>
            </div>
        </>
    );
}