import React, { useEffect } from "react";
import HeaderTitle from "../../reusable/header-title/HeaderTitle";
import AOS from "aos";
import { motion } from "framer-motion";
import {
    fadeRightInitial,
    fadeRightAnimate,
    fadeRightExit,
} from "utils/animation-settings";
import AboutPageContent from "./AboutPageContent";
import AboutPageParallax from "./AboutPageParallax";

const AboutPage = ({ data }) => {
    useEffect(() => {
        AOS.init();
    }, []);

    const parallaxSections = [
        {
            content: data.acf.parallax_content_1,
            image: data.acf.parallax_img_1,
        },
        {
            content: data.acf.parallax_content_2,
            image: data.acf.parallax_img_2,
        },
        {
            content: data.acf.parallax_content_3,
            image: data.acf.parallax_img_3,
        },
        {
            content: data.acf.parallax_content_4,
            image: data.acf.parallax_img_4,
        },
    ];
    console.log(parallaxSections);
    return (
        data && (
            <motion.div
                initial={fadeRightInitial}
                animate={fadeRightAnimate}
                exit={fadeRightExit}
            >
                <HeaderTitle
                    title={data.title.rendered}
                    image={data.acf.background_image}
                />
                <AboutPageContent
                    content={data.acf.main_content}
                    image={data.acf.main_image}
                />
                <AboutPageParallax sections={parallaxSections} />
            </motion.div>
        )
    );
};

export default AboutPage;
