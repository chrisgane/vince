import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useTheme } from "../../components/ThemeContext";
import Link from "next/link";
import Footer from "@/components/Footer";
import useSWR from "swr";
// import { VimeoPlayer } from "react-video-players";
import Vimeo from "@u-wave/react-vimeo";

import { ImSpinner4 } from "react-icons/im";
import { BsArrowDown } from "react-icons/bs";

const Portfolio = () => {
    const router = useRouter();

    const {
        activeProject,
        setProjects,
        projects,
        categories,
        page,
        setPage,
    } = useTheme();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        (async () => {
            const res1 = await fetch(
                `https://stupefied-antonelli.136-244-69-22.plesk.page/index.php/wp-json/wp/v2/portfolio/${router.query.id}`,
            );
            const data = await res1.json();

            setProject(data);
            setLoading(false);
        })();
    }, [router.query.id]);
    const fetcher = (url) => fetch(url).then((res) => res.json());

    const { data, error } = useSWR(
        "https://stupefied-antonelli.136-244-69-22.plesk.page/index.php/wp-json/wp/v2/portfolio",
        fetcher,
    );

    if (error) return "An error has occurred.";

    return (
        <>
            <motion.div
                className="content w-full"
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                    transition: { duration: 0.4, ease: "easeOut" },
                }}
            >
                <motion.div
                    className="w-full  px-4 md:px-6 lg:px-10 xl:px-12 pt-24 h-auto  flex flex-col items-center max-w-5xl justify-center  mx-auto  min-h-screen"
                    exit={{
                        opacity: 0,
                        y: -20,
                        transition: { duration: 0.5, ease: "easeIn" },
                    }}
                >
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: { delay: 0.1, duration: 0.3 },
                        }}
                        className="text-3xl text-center  font-semibold -mt-10 sm:-mt-3 -mb-16 sm:-mb-3 md:mb-6"
                    >
                        {project &&
                            project.title?.rendered &&
                            project.title.rendered}
                    </motion.h1>
                    {project && project.title?.rendered && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                                transition: { delay: 0.3, duration: 1 },
                            }}
                            className="flex flex-row items-start justify-start relative w-full h-full "
                        >
                            <iframe
                                src={project.acf.vimeo}
                                width="1140"
                                height="520"
                                frameborder="0"
                                webkitallowfullscreen
                                mozallowfullscreen
                                allowfullscreen
                                autoplay
                            ></iframe>

                            {loading && (
                                <div className="text-4xl absolute top-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin">
                                    <ImSpinner4 />
                                </div>
                            )}
                        </motion.div>
                    )}

                    {project && project.acf?.content && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: { delay: 0.5, duration: 0.3 },
                            }}
                            className=" text-lg -mt-16 sm:-mt-4 md:mt-10"
                            dangerouslySetInnerHTML={{
                                __html: project.acf.content,
                            }}
                        />
                    )}
                </motion.div>
            </motion.div>
            <h2 className="text-center font-light text-3xl mt-24 mb-10">
                More projects
            </h2>
            <div className="grid grid-cols-1 w-full  md:grid-cols-2 lg:grid-cols-3  gap-y-16  px-6 md:px-12 lg:px-40 pb-20">
                {data &&
                    data
                        .sort(function (a, b) {
                            return 0.5 - Math.random();
                        })
                        .slice(0, 3)
                        .map((project) => (
                            <Link
                                href={`/work/${project.slug}/?id=${project.id}`}
                            >
                                <a>
                                    <div className="flex flex-col justify-center items-center text-center">
                                        <div className="overflow-hidden">
                                            <motion.img
                                                whileHover={{
                                                    scale: 1.04,
                                                    transition: {
                                                        duration: 0.3,
                                                        ease: "easeOut",
                                                    },
                                                }}
                                                whileTap={{
                                                    scale: 1.0,
                                                    transition: {
                                                        duration: 0.3,
                                                        ease: "easeOut",
                                                    },
                                                }}
                                                src={project.acf.image}
                                                className="w-full h-full"
                                            />
                                        </div>
                                        <h3 className="font-normal text-xl text-gray-600 uppercase tracking-widest px-2 mt-8">
                                            {project.title.rendered}
                                        </h3>
                                        <p className="text-base tracking-wider mt-0 px-2">
                                            {project.acf.heading}
                                        </p>
                                    </div>
                                </a>
                            </Link>
                        ))}
            </div>
            <Footer />
        </>
    );
};

export const getServerSideProps = async (ctx) => {
    return {
        props: {
            data: null,
        },
    };
};

export default Portfolio;
