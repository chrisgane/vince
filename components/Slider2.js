import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import AOS from "aos";

const Featured = ({ posts }) => {
    const featuredProjects = posts
        .filter((project) => project.acf.featured)
        .slice(0, 4);
    const restProjects = posts
        .filter((project) => project.acf.featured)
        .slice(4);
    const [currentSlide, setCurrentSlide] = useState(0);
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 5000,
        draggable: true,

        beforeChange: function (currentSlide, nextSlide) {
            setCurrentSlide(nextSlide);
        },

        afterChange: function (currentSlide) {
            console.log("after change", currentSlide);
        },
    };
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="w-full relative py-10 min-h-screen">
            {/* <Carousel
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
                {featuredProjects.map((project) => (
                    <div className="slideProper  w-full px-6 md:px-12 lg:px-40 relative  flex items-center justify-center ">
                        <Link prefetch={false} href={`/work/${project.slug}`}>
                            <div className=" w-full cursor-pointer ">
                                <Image
                                    src={project.acf.image}
                                    placeholder="blur"
                                    blurDataURL={project.acf.image}
                                    width="1600"
                                    height="1066.66"
                                />
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
            </Carousel> */}
            <div className="overflow-hidden pb-10">
                <Slider {...settings}>
                    {featuredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="  px-6 md:px-12 lg:px-40 relative  flex items-center justify-center overflow-hidden"
                        >
                            <a href={`/work/${project.slug}`}>
                                <div className=" w-full cursor-pointer ">
                                    <Image
                                        src={project.acf.image}
                                        placeholder="blur"
                                        blurDataURL={project.acf.image}
                                        width="1600"
                                        height="1066.66"
                                    />
                                    <div className=" w-full flex flex-col lg:flex-row lg:justify-between ">
                                        <h3 className="font-normal text-base md:text-lg lg:text-xl  text-left mb-0 ">
                                            {project.title.rendered}
                                        </h3>
                                        <p className="text-sm lg:text-base tracking-wider text-left  lg:text-right max-w-3xl lg:pl-4">
                                            {project.acf.heading}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16  px-6 md:px-12 lg:px-40 mt-16">
                {restProjects.map((project) => (
                    <Link
                        key={project.id}
                        prefetch={false}
                        href={`/work/${project.slug}`}
                    >
                        <a>
                            <div
                                data-aos="fade-up"
                                className=" flex flex-col justify-center  "
                            >
                                <div className="overflow-hidden">
                                    <motion.div
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
                                    >
                                        <Image
                                            src={project.acf.image}
                                            width="800"
                                            height="533"
                                            placeholder="blur"
                                            blurDataURL={project.acf.image}
                                        />
                                    </motion.div>
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
