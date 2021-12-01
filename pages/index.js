import React from "react";
import { motion } from "framer-motion";
// import Footer from "../components/Footer";
import useSWR from "swr";

import Slider2 from "../components/Slider2";
import Footer from "../components/Footer";

const Home = () => {
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error } = useSWR(
        "https://stupefied-antonelli.136-244-69-22.plesk.page/index.php/wp-json/wp/v2/pages/2",
        fetcher,
    );
    return (
        <>
            <motion.div
                initial={{
                    opacity: 0,
                    x: -20,
                }}
                animate={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.4, ease: "easeOut" },
                }}
                exit={{
                    opacity: 0,
                }}
                className="pt-12 md:pt-16 pb-16 "
            >
                <h1 className="text-center  font-normal text-2xl md:text-4xl mt-1 px-4 ">
                    {data?.acf?.main_header && data.acf.main_header}
                </h1>
                <Slider2 />
            </motion.div>
            <Footer />
        </>
    );
};

export default Home;
