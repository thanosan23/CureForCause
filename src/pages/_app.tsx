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
                <meta name="keywords" content="Cure for Cause,medical,disease,prevention,awareness,nonprofit, disease prevention, cause, cancer, medical issues, disease avoidance, cureforcause, disease education, medical education, medical support, CFC, medical volunteer, Cure For Cause Volunteer, Cure For Cause Events Team Application, CFC Volunteering"/>
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
