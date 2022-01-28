import React from "react";
import AboutPage from "../components/route-components/about/AboutPage";
import { baseUrl } from "../utils/general";

const About = ({ data }) => {
    return <AboutPage data={data} />;
};

export const getStaticProps = async () => {
    const res = await fetch(baseUrl + "pages/132");
    const data = await res.json();

    return {
        props: {
            data,
        },
    };
};

export default About;
