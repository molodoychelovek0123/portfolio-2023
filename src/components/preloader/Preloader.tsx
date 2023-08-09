import React from 'react';
import {useSelector} from 'react-redux'
import {RootState} from '@/store/store';
import {useActions} from "@/hooks/useActions";
import styles from "./Preloader.module.scss";
import {AnimatedTextWord} from "@/components/animation/AnimatedTextWord";

const PRELOADER_DURATION = 3000;

const OutlineSvg = ({isGradient}: { isGradient: boolean }) => (
    <svg className={`a-centered w-[30%] h-[60%] ${isGradient ? '' : styles.svg_animation} pb-[3%]`} width="487" height="517"
         viewBox="0 0 487 517" fill="none" xmlns="http://www.w3.org/2000/svg"
         style={{"--duration": `${PRELOADER_DURATION}ms`} as React.CSSProperties}>
        <path
            d="M2.00005 123.092V218.592C2.00005 221.792 6.00002 227.592 8 230.092L50.5 260.092C38.3333 268.759 12.8 286.592 8 288.592C3.2 290.592 2.00003 300.759 2.00005 305.592C1.6667 327.925 1 375.692 1 388.092C1 400.492 7.66667 406.925 11 408.592C36.8333 427.925 91 467.592 101 471.592C111 475.592 117.167 471.925 119 469.592L146 452.592C165.833 466.925 208.5 497.992 220.5 507.592C232.5 517.192 242.167 516.592 245.5 515.092L335 452.592C340 455.592 351.9 463.192 359.5 469.592C367.1 475.992 373.667 473.592 376 471.592C402.667 453.259 457.8 415.292 465 410.092C472.2 404.892 474.667 397.592 475 394.592C478.667 370.092 486 320.192 486 316.592C486 312.992 483.667 307.759 482.5 305.592L417.5 264.592C431 254.925 459.6 234.692 466 231.092C472.4 227.492 474.667 217.925 475 213.592V126.592C475 118.592 471.667 113.925 470 112.592C442 92.592 383.5 51.292 373.5 46.092C363.5 40.8921 358.333 43.9254 357 46.092L332.5 63.092C307.167 46.092 254.5 10.692 246.5 5.09205C238.5 -0.507951 231.833 2.75872 229.5 5.09205L145.5 63.092C139.833 59.4254 126.6 50.892 119 46.092C111.4 41.292 103.833 44.092 101 46.092C77.3334 62.7587 27.1 97.792 15.5 104.592C3.90005 111.392 1.66672 119.759 2.00005 123.092Z"
            stroke={` ${isGradient ? "url(#radial_gradient)" : "#3E579A"} `} strokeWidth="2"/>
        <defs>
            <radialGradient id="radial_gradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(243 259.092) scale(336 242.27)">
                <stop stopColor="white"/>
                <stop offset="1" stopColor="white" stopOpacity="0.02"/>
            </radialGradient>
        </defs>
    </svg>
)

export const Preloader = () => {
    const isLoaded = useSelector((state: RootState) => state.preloaderReducer.siteLoaded)
    const splineLoaded = useSelector((state: RootState) => state.preloaderReducer.splineLoaded)

    const {preloaderDone} = useActions();

    React.useEffect(()=>{
        if(splineLoaded)
            setTimeout( () => {
                preloaderDone();
            }, PRELOADER_DURATION)
    }, [splineLoaded])

    return (
        <div
            className={`fixed z-50 top-0 left-0 w-full h-[100vh] bg-solid transition-opacity duration-700 ease-in-out ${isLoaded ? 'opacity-0 pointer-events-none' : "opacity-100"}`}>

            <OutlineSvg isGradient={true}/>
            {splineLoaded &&
                <OutlineSvg isGradient={false}/>
            }
            <h1 className={`${styles.outlined_text} pb-[3%] text-9xl text-center font-title font-semibold responsive_text uppercase a-centered w-full`}
                style={{
                    "--small-size": "30",
                    "--phone-size": "40",
                    "--tablet-size": "85",
                    "--desktop-size": "100"
                } as React.CSSProperties}
            > Kirill Tatarinov </h1>


        </div>


    )

}