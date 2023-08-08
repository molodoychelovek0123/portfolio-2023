import React from 'react';
import {Boxes} from "@/components/spline-animation/Boxes";
import {Preloader} from "@/components/preloader/Preloader";
import {About} from "@/components/about/About";
import {useSelector} from "react-redux";
import {RootState} from "@/store/store";




const Home: React.FC = () => {
    const isLoaded = useSelector((state: RootState) => state.preloaderReducer.siteLoaded)

    return (
        <>
            <Preloader/>
            <Boxes/>
            <div className={`content transition-opacity delay-1000 duration-700 ease-in-out  ${isLoaded? "opacity-100" : "opacity-0"}`}>
            <About/>
            </div>
        </>
    );
};

export default Home;