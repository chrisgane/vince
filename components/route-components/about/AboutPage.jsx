import React from "react";
import HeaderTitle from "../../reusable/header-title/HeaderTitle";
import { motion } from "framer-motion";
import {
    fadeRightInitial,
    fadeRightAnimate,
    fadeRightExit,
} from "utils/animation-settings";
import AboutPageContent from "./AboutPageContent";
import AboutPageParallax from "./AboutPageParallax";
import Container from "../../reusable/Container";

const AboutPage = ({ data }) => {
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
                <Container>
                    <AboutPageContent
                        content={data.acf.main_content}
                        image={data.acf.main_image}
                    />
                </Container>
                <AboutPageParallax sections={data.acf.parallax_section} />
            </motion.div>
        )
    );
};

export default AboutPage;
