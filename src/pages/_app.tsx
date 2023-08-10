import {AppProps} from 'next/app';
import Head from 'next/head';
import React, {ReactNode, useEffect, useState} from 'react';

//import {usePathname} from "next/navigation";
import {Provider} from "react-redux";
import {store} from "@/store/store";

import "@/styles/global.scss";
import useBlobity from "blobity/lib/react/useBlobity";


interface LayoutProps {
    children: ReactNode;
}


const Layout: React.FC<LayoutProps> = ({children}) => {
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
                <h1> Im a header</h1>
            </header>
            <main className="relative">{children}</main>
            <footer>
                <h1> Im a footer</h1>
            </footer>
        </>
    );
};

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                {/* Meta tags for the entire application */}
                <meta charSet="utf-8"/>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta name="description" content="Your website description here"/>
                {/* Add more meta tags as needed */}
                <title>Your Website Title</title>
            </Head>
            <Layout>
                {/* Pass the Component and pageProps to the layout */}
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Layout>
        </>
    );
}

export default MyApp;