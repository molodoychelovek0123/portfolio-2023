import React from 'react';
import Image from 'next/image';
import image from "@/static-content/about.jpg"
import {AnimatedTextWord} from "@/components/animation/AnimatedTextWord";

export const About = () => {
    return (
        <>
        <div
            className="container flex flex-col items-start gap-10 md:gap-12 md:flex-row mt-20 md:mt-24 xl:mt-28 ">
            <Image src={image} alt="Kirill Tatarinov - Web Developer" className="rounded-full"/>
            <div>
                <AnimatedTextWord className="font-title text-5xl md:text-title leading-title mb-5 md:mb-6 xl:mb-8 flex flex-wrap" text="Hi there!"/>
                <p className="leading-description text-base md:text-lg xl:text-2xl"> Hello! I'm Kirill Tatarinov, a dedicated web developer with a
                    passion for crafting exceptional digital experiences. Over the years, I have been refining my skills
                    and delving into the dynamic realm of web development.
                    <br/> <br/>
                    During my professional journey, I had the opportunity to establish my own studio, box.dev, where I
                    have been actively involved in creating innovative solutions. Additionally, I had the privilege of
                    working with NewMediaAgency based in LA, CA, USA. This experience allowed me to gain valuable
                    insights and expertise in commercial development for both Russian and global companies</p>

            </div>
        </div>
        </>
    );
}