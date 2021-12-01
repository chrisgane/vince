import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useTheme } from "../components/ThemeContext";
import ProjectsFeed from "../components/ProjectsFeed";
import MobileSorting from "../components/MobileSorting";
import Footer from "../components/Footer";

import useSWR from "swr";
import gsap from "gsap";
const Portfolio = () => {
    const router = useRouter();

    const {
        setActiveProject,
        setProjects,
        categories,
        setCategories,
        page,
        setPage,
    } = useTheme();
    const [loading, setLoading] = useState(true);
    const [loading2, setLoading2] = useState(false);
    useEffect(() => {
        setLoading(true);
        setActiveProject(null);
        setProjects([]);
        setPage(1);

        (async () => {
            const res2 = await fetch(
                "https://stupefied-antonelli.136-244-69-22.plesk.page/index.php/wp-json/wp/v2/categories",
            );
            const data2 = await res2.json();
            setCategories(data2);
            setLoading(false);
        })();
        // return () => setProjects([]);
    }, []);

    useEffect(() => {
        setLoading(true);

        (async () => {
            // gsap.to("#projectItem", { opacity: 0, duration: 2 });
            const res1 = await fetch(
                !router.query.id
                    ? `https://stupefied-antonelli.136-244-69-22.plesk.page/index.php/wp-json/wp/v2/portfolio?per_page=100&page=${page}`
                    : `https://stupefied-antonelli.136-244-69-22.plesk.page/index.php/wp-json/wp/v2/portfolio?categories=${router.query.id}&per_page=10&page=${page}`,
            );
            const data = await res1.json();

            if (data.length > 0) {
                setProjects(data);
            }
            setLoading(false);
        })();
    }, [router.query.category]);

    const fetcher = (url) => fetch(url).then((res) => res.json());

    const { data, error } = useSWR(
        "https://stupefied-antonelli.136-244-69-22.plesk.page/index.php/wp-json/wp/v2/pages/102",
        fetcher,
    );
    if (error) return "An error has occurred.";
    return (
        <motion.div
            className="w-full pt-20 flex flex-col items-center justify-center"
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
                transition: { duration: 0.4, ease: "easeOut" },
            }}
            exit={{
                opacity: 0,
                transition: { duration: 0.1, delay: 0.4, ease: "easeOut" },
            }}
        >
            <div className="flex flex-col items-center justify-center min-h-screen pb-20">
                <motion.h1
                    exit={{
                        opacity: 0,
                        y: -30,
                        transition: { duration: 0.2, ease: "easeIn" },
                    }}
                    className="text-center  font-normal text-2xl md:text-4xl mt-5 px-4 "
                >
                    {data?.acf?.main_header && data.acf.main_header}
                </motion.h1>
                <MobileSorting categories={categories} />
                <AnimatePresence>
                    {!loading && <ProjectsFeed />}
                </AnimatePresence>
            </div>
            <Footer />
        </motion.div>
    );
};

export default Portfolio;
