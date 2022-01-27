import React, { useEffect } from "react";
import { motion } from "framer-motion";
import useSWR from "swr";
import AOS from "aos";

import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";

const About = () => {
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error } = useSWR(
        "https://stupefied-antonelli.136-244-69-22.plesk.page/index.php/wp-json/wp/v2/pages/132",
        fetcher,
    );
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            {data && (
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
                        x: -20,
                        transition: { duration: 0.4, ease: "easeOut" },
                    }}
                >
                    <div
                        data-aos="fade-up"
                        className="w-full h-screen flex justify-center items-center -mt-28 "
                        style={{
                            background: `url(${data.acf.background_image})`,
                            backgroundPosition: "center center",
                        }}
                    >
                        <h1
                            data-aos="fade-up"
                            className="text-white text-6xl font-extrabold uppercase"
                        >
                            {data.title.rendered}
                        </h1>
                    </div>
                    <div className="py-24 px-3">
                        <div
                            data-aos="fade-up"
                            className="aboutContent text-center max-w-4xl m-auto"
                            dangerouslySetInnerHTML={{
                                __html: data.acf.main_content,
                            }}
                        />
                        <img
                            data-aos="fade-up"
                            src={data.acf.main_image}
                            className="m-auto w-full max-w-4xl mt-24"
                        />
                    </div>
                    {/* Desktop */}
                    <div className="hidden lg:block">
                        <ParallaxProvider>
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <ParallaxBanner
                                    className="your-class"
                                    layers={[
                                        {
                                            image: data.acf.parallax_img_1,
                                            amount: 0.3,
                                        },
                                    ]}
                                    style={{
                                        height: "600px",
                                    }}
                                ></ParallaxBanner>
                                <div className="flex items-center justify-content py-24 lg:py-0 px-10">
                                    <div
                                        className="aboutContent text-center max-w-2xl m-auto "
                                        dangerouslySetInnerHTML={{
                                            __html: data.acf.parallax_content_1,
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="flex items-center justify-content py-24 lg:py-0 px-10">
                                    <div
                                        className="aboutContent text-center max-w-2xl m-auto "
                                        dangerouslySetInnerHTML={{
                                            __html: data.acf.parallax_content_2,
                                        }}
                                    />
                                </div>
                                <ParallaxBanner
                                    className="your-class"
                                    layers={[
                                        {
                                            image: data.acf.parallax_img_2,
                                            amount: 0.3,
                                        },
                                    ]}
                                    style={{
                                        height: "600px",
                                    }}
                                ></ParallaxBanner>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <ParallaxBanner
                                    className="your-class"
                                    layers={[
                                        {
                                            image: data.acf.parallax_img_3,
                                            amount: 0.4,
                                        },
                                    ]}
                                    style={{
                                        height: "600px",
                                    }}
                                ></ParallaxBanner>
                                <div className="flex items-center justify-content py-24 lg:py-0 px-10">
                                    <div
                                        className="aboutContent text-center max-w-2xl m-auto "
                                        dangerouslySetInnerHTML={{
                                            __html: data.acf.parallax_content_3,
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="flex items-center justify-content py-24 lg:py-0 px-10">
                                    <div
                                        className="aboutContent text-center max-w-2xl m-auto "
                                        dangerouslySetInnerHTML={{
                                            __html: data.acf.parallax_content_4,
                                        }}
                                    />
                                </div>
                                <ParallaxBanner
                                    layers={[
                                        {
                                            image: data.acf.parallax_img_4,
                                            amount: 0.4,
                                        },
                                    ]}
                                    style={{
                                        height: "600px",
                                    }}
                                ></ParallaxBanner>
                            </div>
                        </ParallaxProvider>
                    </div>
                    {/* Mobile */}
                    <div className="block lg:hidden">
                        <ParallaxProvider>
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <ParallaxBanner
                                    className="your-class"
                                    layers={[
                                        {
                                            image: data.acf.parallax_img_1,
                                            amount: 0.3,
                                        },
                                    ]}
                                    style={{
                                        height: "600px",
                                    }}
                                ></ParallaxBanner>
                                <div className="flex items-center justify-content py-24 lg:py-0 px-10">
                                    <div
                                        className="aboutContent text-center max-w-2xl m-auto "
                                        dangerouslySetInnerHTML={{
                                            __html: data.acf.parallax_content_1,
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <ParallaxBanner
                                    className="your-class"
                                    layers={[
                                        {
                                            image: data.acf.parallax_img_2,
                                            amount: 0.3,
                                        },
                                    ]}
                                    style={{
                                        height: "600px",
                                    }}
                                ></ParallaxBanner>
                                <div className="flex items-center justify-content py-24 lg:py-0 px-10">
                                    <div
                                        className="aboutContent text-center max-w-2xl m-auto "
                                        dangerouslySetInnerHTML={{
                                            __html: data.acf.parallax_content_2,
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <ParallaxBanner
                                    className="your-class"
                                    layers={[
                                        {
                                            image: data.acf.parallax_img_3,
                                            amount: 0.4,
                                        },
                                    ]}
                                    style={{
                                        height: "600px",
                                    }}
                                ></ParallaxBanner>
                                <div className="flex items-center justify-content py-24 lg:py-0 px-10">
                                    <div
                                        className="aboutContent text-center max-w-2xl m-auto "
                                        dangerouslySetInnerHTML={{
                                            __html: data.acf.parallax_content_3,
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <ParallaxBanner
                                    layers={[
                                        {
                                            image: data.acf.parallax_img_4,
                                            amount: 0.4,
                                        },
                                    ]}
                                    style={{
                                        height: "600px",
                                    }}
                                ></ParallaxBanner>
                                <div className="flex items-center justify-content py-24 lg:py-0 px-10">
                                    <div
                                        className="aboutContent text-center max-w-2xl m-auto "
                                        dangerouslySetInnerHTML={{
                                            __html: data.acf.parallax_content_4,
                                        }}
                                    />
                                </div>
                            </div>
                        </ParallaxProvider>
                    </div>
                </motion.div>
            )}
        </>
    );
};

export default About;
