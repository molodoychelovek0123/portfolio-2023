import React, {Suspense, useRef} from 'react';
import {Application, SPEObject} from '@splinetool/runtime';
import {useActions} from "@/hooks/useActions";

const Spline = React.lazy(() => import('@splinetool/react-spline'));
export const Boxes = () => {

    const {siteLoaded} = useActions();

    const objectsToAnimate: React.MutableRefObject<SPEObject[] | undefined> = useRef(undefined);

    function onLoad(spline: Application) {
        // save the object in a ref for later use
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

        triggerAnimation();
        siteLoaded();
    }

    function triggerAnimation() {
        // console.log(objectsToAnimate.current);

        if (objectsToAnimate.current && objectsToAnimate.current.length > 0)
            objectsToAnimate.current.map(o => o.emitEvent('mouseDown'));
        // objectToAnimate.current.emitEvent('mouseDown');
    }

    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                    <Spline scene="https://prod.spline.design/JQAiiQX9BBE3PFcn/scene.splinecode"
                            onLoad={onLoad}
                    />
                    {/*<button type="button" onClick={triggerAnimation}>*/}
                    {/*    Trigger Spline Animation*/}
                    {/*</button>*/}
            </Suspense>
        </div>
    );
}