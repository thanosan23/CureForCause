import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";

import "~/styles/globals.css";

import { Analytics } from '@vercel/analytics/react';

const App: AppType = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>Cure For Cause</title>
                <meta name="description" content="Cure for Cause" />
                <link rel="icon" href="icon.png" sizes="any"/>
            </Head>
            <div>
                <Component {...pageProps} />
                <Analytics />
            </div>
        </>
    );
};

export default App;
