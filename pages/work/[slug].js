import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useTheme } from "../../components/ThemeContext";
import Link from "next/link";
import Footer from "@/components/Footer";
import useSWR from "swr";
// import { VimeoPlayer } from "react-video-players";
import Vimeo from "@u-wave/react-vimeo";
import Image from "next/image";
import { ImSpinner4 } from "react-icons/im";
import { BsArrowDown } from "react-icons/bs";
import AOS from "aos";
import Title from "@/components/reusable/Title";

const Portfolio = ({ data, project }) => {
    const router = useRouter();
    useEffect(() => {
        AOS.init();
    }, [router]);
    return (
        <>
            <div className="content w-full">
                <div className="w-full px-4 md:px-6 lg:px-10 xl:px-12 pt-0 h-auto flex flex-col items-center max-w-5xl justify-center mx-auto min-h-screen">
                    <Title>
                        {project &&
                            project.title?.rendered &&
                            project.title.rendered}
                    </Title>
                    <div
                        data-aos="fade"
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
                    </div>

                    <div
                        data-aos="fade-up"
                        id="main-content"
                        className=" text-lg -mt-16 sm:-mt-4 md:mt-10"
                        dangerouslySetInnerHTML={{
                            __html: project.acf.content,
                        }}
                    />
                </div>
            </div>

            <h2
                data-aos="fade-up"
                className="text-center font-light text-3xl mt-24 mb-10"
            >
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
                            <Link href={`/work/${project.slug}`}>
                                <a>
                                    <div
                                        data-aos="fade-up"
                                        className="flex flex-col justify-center items-center text-center"
                                    >
                                        <div className="overflow-hidden">
                                            <Image
                                                src={project.acf.image}
                                                width="470"
                                                height="313"
                                                placeholder="blur"
                                                blurDataURL={project.acf.image}
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
        </>
    );
};

export const getStaticProps = async (ctx) => {
    const res2 = await fetch(
        `https://stupefied-antonelli.136-244-69-22.plesk.page/index.php/wp-json/wp/v2/portfolio`,
    );
    const posts = await res2.json();

    const currentPost = posts.filter(
        (item) => item.slug === ctx.params.slug,
    )[0];

    return {
        props: {
            data: posts,
            project: currentPost,
        },
    };
};

export const getStaticPaths = async () => {
    const res = await fetch(
        `https://stupefied-antonelli.136-244-69-22.plesk.page/index.php/wp-json/wp/v2/portfolio`,
    );
    const posts = await res.json();

    const paths = posts.map((post) => ({
        params: { slug: post.slug.toString() },
    }));

    return {
        paths,
        fallback: false,
    };
};
export default Portfolio;
