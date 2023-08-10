import React from 'react';
import {Boxes} from "@/components/spline-animation/Boxes";
import {Preloader} from "@/components/preloader/Preloader";
import {About} from "@/components/about/About";
import {useSelector} from "react-redux";
import {RootState} from "@/store/store";
import {Expertise} from "@/components/expertise/Expertise";
import {ProjectGrid} from "@/components/portfolio/ProjectGrid";
import {Tools} from "@/components/tools/Tools";
import {Contact} from "@/components/contact/Contact";


const Home: React.FC = () => {
    const isLoaded = useSelector((state: RootState) => state.preloaderReducer.siteLoaded)
    const splineLoaded = useSelector((state: RootState) => state.preloaderReducer.splineLoaded)


    return (
        <div>
            <div
                className="fixed inset-0 p-1 w-full h-full backdrop-blur-[8px] pointer-events-none z-50 opacity-1 overlay-mask"
            ></div>
            <div
                className="fixed inset-0 p-1 w-full h-full bg-gradient-to-t from-bg-dark to-transparent opacity-40 pointer-events-none z-40"
            ></div>
            <Preloader/>

            <Boxes/>
            {splineLoaded &&
                <div
                    className={`content transition-opacity delay-1000 duration-700 ease-in-out  ${isLoaded ? "opacity-100" : "opacity-0 mt-[100vh]"}`}>
                    <About/>
                    <Expertise/>
                    <ProjectGrid/>
                    <Tools/>
                    <Contact/>
                </div>
            }
        </div>
    );
};

export default Home;