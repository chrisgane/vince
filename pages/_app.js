import React from "react";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import NextNprogress from "nextjs-progressbar";
import Layout from "../components/Layout.js";
import { ThemeProvider } from "../components/ThemeContext.js";

import "../styles/global.scss";
import "tailwindcss/tailwind.css";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    return (
        <ThemeProvider>
            <Layout>
                <NextNprogress
                    color="black"
                    x
                    startPosition={0.3}
                    stopDelayMs={200}
                    height={5}
                    showOnShallow={true}
                />
                <AnimatePresence exitBeforeEnter>
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
        </ThemeProvider>
    );
}

export default MyApp;
