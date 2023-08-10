import React from 'react';
import Image from 'next/image';

import styles from './Contact.module.scss';

import mail from "@/static-content/mail.svg"
import tg from "@/static-content/tg.svg"

export const Contact = ()=> {
    return (
                <div className="container my-24 mx-auto md:px-6">
                    <div className="mb-32">
                        <div className="h-[500px] overflow-hidden relative" >
                            <video src="/abstract.mp4" className={`absolute top-0 left-0 w-full h-full object-cover ${styles.bg_mask}`} autoPlay muted loop></video>
                        </div>

                        <div className="container mx-auto px-6 md:px-12 xl:px-32">
                            <div className="text-center">
                                <div className="mt-[-170px] block rounded-lg  bg-[hsla(0,0%,100%,0.7)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:py-16 md:px-12">
                                    <h1 className="mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                                       Contact me
                                    </h1>

                                    <div className="flex flex-wrap justify-center gap-4 md:gap-5 xl:gap-6">
                                    <a href="mailto:boxdeveloper@studiobox.dev">
                                        <Image src={mail} alt="Contact me - Email" width={45}/>
                                    </a>
                                        <a href="https://t.me/boxdeveloper">
                                            <Image src={tg} alt="Contact me - Telegram" width={45}/>
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}