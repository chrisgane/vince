import React from "react";
import Head from "next/Head";
import { motion } from "framer-motion";
import Slider2 from "../components/Slider2";
import Title from "@/components/reusable/Title";
import Container from "@/components/reusable/Container";
import RestProjects from "@/components/main/rest-projects/RestProjects";
import {
    fadeUpExitDefault,
    fadeUpAnimateDefault,
    fadeUpInitial,
} from "../utils/animation-settings";
import SeoTags from "../components/reusable/seo-tags/SeoTags";

const Home = ({ data, posts }) => {
    const featuredProjects = posts
        .filter((project) => project.acf.featured)
        .slice(0, 4);

    const restProjects = posts
        .filter((project) => project.acf.featured)
        .slice(4);

    return (
        <Container>
            <SeoTags
                metaTitle={data.acf.meta_title}
                metaDescription={data.acf.meta_description}
            />
            <Head>
                <link
                    rel="stylesheet"
                    href="https://use.typekit.net/ozc1vaf.css"
                ></link>
            </Head>
            <motion.div
                initial={fadeUpInitial}
                animate={fadeUpAnimateDefault}
                exit={fadeUpExitDefault}
                className="pb-16 home"
            >
                <Title>{data?.acf?.main_header && data.acf.main_header}</Title>
                <Slider2 posts={featuredProjects} />
                <RestProjects posts={restProjects} />
            </motion.div>
        </Container>
    );
};

export const getStaticProps = async () => {
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
        revalidate: 10,
    };
};

export default Home;
