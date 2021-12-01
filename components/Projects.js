import React, { useCont, ext, useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import useSWR from "swr";
import Link from "next/link";
const Projects = ({ projects }) => {
    // const fetcher = (url) => fetch(url).then((res) => res.json());

    // const { data, error } = useSWR(
    //     "https://stupefied-antonelli.136-244-69-22.plesk.page/index.php/wp-json/wp/v2/portfolio",
    //     fetcher,
    // );

    // if (error) return "An error has occurred.";
    // if (!data) return "Loading...";
    // const featuredProjects = data
    //     .filter((project) => project.acf.featured)
    //     .slice(0, 4);

    return (
        <div className="grid grid-cols-2 gap-5  px-6 md:px-12 lg:px-40">
            <div>LOL</div>
            <div>LOL</div>
            <div>LOL</div>
            <div>LOL</div>
            <div>LOL</div>
            <div>LOL</div>
        </div>
    );
};

export default Projects;
