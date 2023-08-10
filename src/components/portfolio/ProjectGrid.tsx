import React from 'react';
import {AnimatedTextWord} from "@/components/animation/AnimatedTextWord";
import styles from './ProjectGrid.module.scss';
import {ProjectCard} from "./ProjectCard";
import {Projects} from "./ProjectsData";
import {useRouter} from "next/router";
import useTranslation from "next-translate/useTranslation";

export const ProjectGrid = () => {

    const {t} = useTranslation();
    const router = useRouter();
    const {locale} = router;
    console.log(locale);
    if (!locale || (locale != "en" && locale != "ru"))
        return (<></>)
    const p = Projects[locale];
    return (
        <>
            <div className="container my-40 xl:my-48">
                <AnimatedTextWord
                    className="font-title text-5xl md:text-title leading-title mb-5 md:mb-6 xl:mb-8 flex flex-wrap"
                    text={t("portfolio:title")}/>
                <div className={`${styles.grid} w-full`}>
                    {p.map(project =>
                        <ProjectCard {...project} key={project.title}/>
                    )
                    }
                </div>
            </div>
        </>
    )
}