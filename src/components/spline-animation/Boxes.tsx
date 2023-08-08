import React, {Suspense, useRef} from 'react';
import {Application, SPEObject} from '@splinetool/runtime';
import {useActions} from "@/hooks/useActions";
import styles from "./Boxes.module.scss";
import {useSelector} from "react-redux";
import {RootState} from "@/store/store";
import {motion} from "framer-motion";

const Spline = React.lazy(() => import('@splinetool/react-spline'));
export const Boxes = () => {

    const {splineLoaded} = useActions();

    const objectsToAnimate: React.MutableRefObject<SPEObject[] | undefined> = useRef(undefined);

    function onLoad(spline: Application) {
        objectsToAnimate.current = [];
        const globalEl = spline.findObjectByName('Cubes');
        if (globalEl)
            objectsToAnimate.current.push(globalEl);
        for (let i = 1; i < 7; i++) {
            const cube = spline.findObjectByName('Cube ' + i);
            if (cube) {
                console.log(cube);
                objectsToAnimate.current.push(cube);
            }
        }
        setTimeout(() => {
            splineLoaded();
        }, 2000)

    }

    function triggerAnimation() {
        if (objectsToAnimate.current && objectsToAnimate.current.length > 0)
            objectsToAnimate.current.map(o => o.emitEvent('mouseDown'));
    }

    const isLoaded = useSelector((state: RootState) => state.preloaderReducer.siteLoaded)
    if (isLoaded) {
        triggerAnimation();
    }

    return (
        <motion.div layout
                    transition={{ delay:0.3, duration: 0.7, ease: "easeInOut", type: "tween" }}
                    className={`${styles.wrapper} ${!isLoaded ? 'fixed a-y-centered' : 'relative'}`}>
            <Suspense fallback={<div>Loading...</div>}>
                <Spline scene="https://prod.spline.design/JQAiiQX9BBE3PFcn/scene.splinecode"
                        onLoad={onLoad}
                />
                {/*<button type="button" onClick={triggerAnimation}>*/}
                {/*    Trigger Spline Animation*/}
                {/*</button>*/}
            </Suspense>
        </motion.div>
    );
}