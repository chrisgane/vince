import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import ProjectsFeed from "../../../components/ProjectsFeed";
import MobileSorting from "../../../components/MobileSorting";
import Footer from "../../../components/Footer";

import useSWR from "swr";
import gsap from "gsap";
const Portfolio = ({ cats, posts, currentCat }) => {
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleRouteChange = (url, { shallow }) => {
            setLoading(true);
            console.log(
                `App is changing to ${url} ${
                    shallow ? "with" : "without"
                } shallow routing`,
            );
        };

        router.events.on("routeChangeStart", handleRouteChange);

        return () => {
            router.events.off("routeChangeStart", handleRouteChange);
        };
    }, []);
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center min-h-screen pb-20">
                <h1 className="text-center  font-normal text-2xl md:text-4xl mt-5 px-4 ">
                    {currentCat.name}
                </h1>
                <MobileSorting categories={cats} />
                <ProjectsFeed projects={posts} />
            </div>
        </div>
    );
};

export const getStaticProps = async (ctx) => {
    const res1 = await fetch(
        `https://stupefied-antonelli.136-244-69-22.plesk.page/index.php/wp-json/wp/v2/categories`,
    );
    const cats = await res1.json();
    const currentCat = cats.filter((item) => item.slug === ctx.params.slug)[0];

    const res2 = await fetch(
        `https://stupefied-antonelli.136-244-69-22.plesk.page/index.php/wp-json/wp/v2/portfolio?per_page=100&categories=${currentCat.id}`,
    );
    const posts = await res2.json();

    return {
        props: {
            posts,
            cats,
            currentCat,
        },
    };
};

export const getStaticPaths = async () => {
    const res1 = await fetch(
        `https://stupefied-antonelli.136-244-69-22.plesk.page/index.php/wp-json/wp/v2/categories`,
    );
    const cats = await res1.json();

    const paths = cats.map((cat) => ({
        params: { slug: cat.slug.toString() },
    }));

    return {
        paths,
        fallback: false,
    };
};
export default Portfolio;
