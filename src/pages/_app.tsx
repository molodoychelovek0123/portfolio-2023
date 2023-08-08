import {AppProps} from 'next/app';
import Head from 'next/head';
import React, {ReactNode} from 'react';

import {usePathname} from "next/navigation";
import {Provider} from "react-redux";
import {store} from "@/store/store";

import "@/styles/global.scss";


interface LayoutProps {
    children: ReactNode;
}


const Layout: React.FC<LayoutProps> = ({children}) => {
    const pageType = usePathname();

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