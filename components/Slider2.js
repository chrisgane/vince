import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import useSWR from "swr";
import Link from "next/link";
const Featured = () => {
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error } = useSWR(
        "https://stupefied-antonelli.136-244-69-22.plesk.page/index.php/wp-json/wp/v2/portfolio",
        fetcher,
    );

    const featuredProjects =
        data && data.filter((project) => project.acf.featured).slice(0, 4);
    const restProjects =
        data && data.filter((project) => project.acf.featured).slice(4);

    return (
        <div className="w-full relative py-10 min-h-screen">
            <Carousel
                showThumbs={false}
                stopOnHover={false}
                autoPlay={true}
                infiniteLoop={true}
                interval={5000}
                showIndicators={false}
                showStatus={false}
                showIndicators={false}
                dynamicHeight={false}
                className="relative "
            >
                {data &&
                    featuredProjects.map((project) => (
                        <div className="slideProper  w-full px-6 md:px-12 lg:px-40 relative  flex items-center justify-center ">
                            <Link
                                prefetch={false}
                                href={`/work/${project.slug}/?id=${project.id}`}
                                scroll={false}
                            >
                                <div className=" w-full h-full cursor-pointer ">
                                    <img src={project.acf.image} />
                                    <div className=" w-full flex flex-col lg:flex-row lg:justify-between ">
                                        <h3 className="font-normal text-base md:text-lg lg:text-xl  text-left mb-0 ">
                                            {project.title.rendered}
                                        </h3>
                                        <p className="text-sm lg:text-base tracking-wider text-left  lg:text-right max-w-3xl lg:pl-4">
                                            {project.acf.heading}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
            </Carousel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16  px-6 md:px-12 lg:px-40">
                {data &&
                    restProjects.map((project) => (
                        <Link
                            prefetch={false}
                            href={`/work/${project.slug}/?id=${project.id}`}
                            scroll={false}
                        >
                            <a>
                                <div className="flex flex-col justify-center  ">
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
                                    <h3 className="font-normal text-base md:text-lg lg:text-xl text-center ">
                                        {project.title.rendered}
                                    </h3>
                                    <p className="text-sm tracking-wider mt-0 px-2  text-center">
                                        {project.acf.heading}
                                    </p>
                                </div>
                            </a>
                        </Link>
                    ))}
            </div>
        </div>
    );
};

export default Featured;
