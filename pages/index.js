import React from "react";
import { motion } from "framer-motion";
// import Footer from "../components/Footer";
import useSWR from "swr";

import Slider2 from "../components/Slider2";
import Footer from "../components/Footer";
import Title from "@/components/reusable/Title";

const Home = ({ data, posts }) => {
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
                className=" pb-16 "
            >
                <Title> {data?.acf?.main_header && data.acf.main_header}</Title>
                <Slider2 posts={posts} />
            </motion.div>
            <Footer />
        </>
    );
};

export const getStaticProps = async (ctx) => {
    const res = await fetch(
        "https://stupefied-antonelli.136-244-69-22.plesk.page/index.php/wp-json/wp/v2/pages/2",
    );
    const data = await res.json();
    const res2 = await fetch(
        "https://stupefied-antonelli.136-244-69-22.plesk.page/index.php/wp-json/wp/v2/portfolio",
    );
    const posts = await res2.json();

    return {
        props: {
            data,
            posts,
        },
    };
};

export default Home;
