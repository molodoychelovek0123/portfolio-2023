import React from "react";
import {AnimatedTextWord} from "@/components/animation/AnimatedTextWord";
import {Data} from "./ToolsData";
import {ToolsRow} from "@/components/tools/ToolsRow";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";


export const Tools = () => {
    const {t} = useTranslation();
   return (
    <div className="container mb-96">
        <AnimatedTextWord
            className="font-title text-5xl md:text-title leading-title mb-5 md:mb-6 xl:mb-8 flex flex-wrap"
            text={t("tools:title")}/>
        {Data.map((item,index) =>
            <ToolsRow {...item} key={index}/>
        )}


        <div className="mb-10"></div>

        <Link href="https://studiobox.dev/resume"
              className="active:bg-purple-400 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] bg-purple-900 duration-150 ease-in-out focus:bg-primary-600 focus:outline-none focus:ring-0 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] font-medium hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] inline-block leading-normal pb-2 pt-2.5 px-6 rounded shadow-[0_4px_9px_-4px_#3b71ca] text-white text-xs transition uppercase">
            {t("tools:resume")}
        </Link>

    </div>
);

}