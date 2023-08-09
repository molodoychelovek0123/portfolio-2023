import React from "react";
import {AnimatedTextWord} from "@/components/animation/AnimatedTextWord";
import {Data} from "./ToolsData";
import {ToolsRow} from "@/components/tools/ToolsRow";


export const Tools = () => (
    <div className="container">
        <AnimatedTextWord
            className="font-title text-5xl md:text-title leading-title mb-5 md:mb-6 xl:mb-8 flex flex-wrap"
            text="Creating web applications using:"/>
        {Data.map(item =>
            <ToolsRow {...item} />)}

    </div>
);