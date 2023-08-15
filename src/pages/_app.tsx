import {AppProps} from 'next/app';
import Head from 'next/head';
import React, {ReactNode} from 'react';

//import {usePathname} from "next/navigation";
import {Provider} from "react-redux";
import {store} from "@/store/store";

import "@/styles/global.scss";
import useBlobity from "blobity/lib/react/useBlobity";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import Image from "next/image";
import {Dropdown} from "@/components/language-dropdown/Dropdown";
import styles from "*.module.scss";
import {Schema} from "@/components/common/Schema";


interface LayoutProps {
    children: ReactNode;
}


const Layout: React.FC<LayoutProps> = ({children}) => {

    const {t, lang} = useTranslation();
    //const pageType = usePathname();
    const blobity = useBlobity({
        licenseKey: 'molodoychelovek0123', // This is an open source solution that you can buy for $24 or use for free in open source projects
        focusableElementsOffsetX: 4,
        focusableElementsOffsetY: 4,
        color: "#ffffff",
        dotColor: "#ffffff",
        invert: true,
        focusableElements:
            "[data-blobity], a:not([data-no-blobity]), [data-blobity-tooltip]",
        font: "'Syne','Source Sans Pro',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif",
        fontSize: 16,
        fontWeight: 900,
        opacity: 0.7,
        fontColor: "#000000",
        zIndex: 35,
        size: 50,
        radius: 5,
        magnetic: false,
    });
    return (
        <>
            <header>
                {/*<Image src={`/${lang}.svg`} alt="Localization Flag" width={32} height={32} className="rounded-full" />*/}
                {/*<div> {t('header:local')} </div>*/}
                <Dropdown/>
            </header>
            <main className="relative">{children}</main>
            <footer>
                <div className="h-[500px] overflow-hidden relative" >
                    <video src="/abstract.mp4" className={`absolute top-0 left-0 w-full h-full object-cover bg_mask`} autoPlay muted loop></video>
                </div>
            </footer>
        </>
    );
};

function MyApp({Component, pageProps}: AppProps) {
    const {t} = useTranslation();
    return (
        <>
            <Head>
                {/* Meta tags for the entire application */}
                <meta charSet="utf-8"/>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta
                    name="description"
                    content={t("seo:description")}
                />
                <meta
                    name="keywords"
                    content={t("seo:keywords")}
                />
                <meta name="author" content="Tatarinov Kirill"/>
                <meta name="robots" content="index, follow"/>
                {/* Open Graph meta tags for social media sharing */}
                <meta property="og:title" content="Tatarinov Kirill - Front-end Developer"/>
                <meta
                    property="og:description"
                    content={t("seo:ogDescription")}
                />
                <meta property="og:image" content="https://hireme.studiobox.dev/ogImage.png"/>
                <meta property="og:url" content="https://hireme.studiobox.dev/"/>
                <meta property="og:type" content="website"/>
                {/* Twitter Card meta tags for Twitter sharing */}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content="Tatarinov Kirill - Front-end Developer"/>
                <meta
                    name="twitter:description"
                    content={t("seo:ogDescription")}
                />
                <meta name="twitter:image" content="https://hireme.studiobox.dev/ogImage.png"/>
                <link rel="canonical" href="https://hireme.studiobox.dev/"/>


                <title>Tatarinov Kirill - Front-end Developer | Portfolio</title>


                <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
                <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
                <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
                <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
                <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
                <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
                <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
                <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
                <link
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                    href="/android-icon-192x192.png"
                />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/manifest.json"/>
                <meta name="msapplication-TileColor" content="#0f0f15"/>
                <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
                <meta name="theme-color" content="#0f0f15"/>

            </Head>
            <Layout>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Layout>
            <Schema/>
        </>
    );
}

export default MyApp;