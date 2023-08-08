import React from 'react';
import {AnimatedTextWord} from "@/components/animation/AnimatedTextWord";
import {InView} from "react-intersection-observer"

export const Expertise = () => {
    return (
        <InView triggerOnce threshold={1}>
            {({inView, ref, entry}) => (
                <div className="container mt-44" ref={ref}>
                    <div className=" max-w-2.5xl">
                    <AnimatedTextWord className="font-title text-5xl md:text-title leading-title mb-5 md:mb-6 xl:mb-8 flex flex-wrap"
                                      text="Unveiling the Palette of Frontend Expertise"/>
                    <p className={`leading-description text-base md:text-lg xl:text-2xl transition-opacity duration-700 ease-in-out  ${inView ? "opacity-100" : "opacity-0"}`}>

                        Welcome to my world of blending creativity with code!
                        <br/><br/> I'm a frontend developer on a mission to create seamless web experiences that
                        captivate and
                        engage. With
                        a foundation in HTML, CSS, and JavaScript, I craft interfaces that come to life.
                        <br/><br/>My real strengths lie in continuous learning and close collaboration with clients. By
                        understanding
                        their unique needs, I ensure that every project not only meets their expectations but leaves
                        them
                        satisfied. Let's embark on a journey where innovation and customer satisfaction drive my
                        frontend
                        endeavors. </p>
                    </div>
                </div>
            )}
        </InView>
    );
}