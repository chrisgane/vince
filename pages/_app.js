import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "../styles/global.scss";
import { AnimatePresence } from "framer-motion";
import Router, { useRouter } from "next/router";
import Layout from "../components/Layout.js";
import { ThemeProvider } from "../components/ThemeContext.js";
import NextNprogress from "nextjs-progressbar";
import "aos/dist/aos.css"; // You can also use <link> for styles

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// function handleExitComplete() {
//     if (typeof window !== "undefined") {
//         window.scrollTo({ top: 0 });
//     }
// }

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
                <AnimatePresence
                    exitBeforeEnter
                    // onExitComplete={handleExitComplete}
                >
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
        </ThemeProvider>
    );
}

export default MyApp;
