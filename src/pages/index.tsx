import React from 'react';
import {Boxes} from "@/components/spline-animation/Boxes";
import {Preloader} from "@/components/preloader/Preloader";




const Home: React.FC = () => {
    return (
        <>
            <Preloader/>
            <Boxes/>
        </>
    );
};

export default Home;