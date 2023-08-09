import React from 'react';
import {AnimatedTextWord} from "@/components/animation/AnimatedTextWord";
import styles from './ProjectGrid.module.scss';
import {ProjectCard} from "./ProjectCard";
import {Projects} from "./ProjectsData";

export const ProjectGrid = () => {
    return (
        <>
            <div className="container my-40 xl:my-48">
                <AnimatedTextWord
                    className="font-title text-5xl md:text-title leading-title mb-5 md:mb-6 xl:mb-8 flex flex-wrap"
                    text="Check some of my works!"/>
                <div className={`${styles.grid} w-full`}>

                    {Projects.map(project => (
                        <ProjectCard {...project} key={project.title}/>
                        )

                    )}
                </div>
            </div>
        </>
    )
}