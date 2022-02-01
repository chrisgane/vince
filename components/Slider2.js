import React, { useState, useEffect, createRef } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import Slider from "./reusable/Slider";

const Slider2 = ({ posts }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [mousePosition, setMousePosition] = useState({
        clientXonMouseDown: null,
        clientYonMouseDown: null,
    });

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 350,
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

    const handleOnMouseDown = (e) => {
        setMousePosition({
            clientXonMouseDown: e.clientX,
            clientYonMouseDown: e.clientY,
        });

        e.preventDefault();
    };

    const handleOnClick = (e) => {
        e.stopPropagation();

        if (
            mousePosition.clientXonMouseDown !== e.clientX ||
            mousePosition.clientYonMouseDown !== e.clientY
        ) {
            e.preventDefault();
        }
    };

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className="overflow-hidden pb-10 mt-10 relative">
            <Slider settings={settings}>
                {posts.map((project) => (
                    <div
                        key={project.id}
                        className="px-6 md:px-1 relative flex items-center justify-center overflow-hidden"
                    >
                        <Link href={`/work/${project.slug}`}>
                            <a
                                onMouseDown={(e) => handleOnMouseDown(e)}
                                onClick={(e) => handleOnClick(e)}
                            >
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
                        </Link>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default Slider2;
