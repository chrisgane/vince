import React from "react";
import AboutPage from "../components/route-components/about/AboutPage";
import { baseUrl } from "../utils/general";
import SeoTags from "../components/reusable/seo-tags/SeoTags";

const About = ({ data }) => {
    return (
        <>
            <SeoTags
                metaTitle={data.acf.meta_title}
                metaDescription={data.acf.meta_description}
            />
            <AboutPage data={data} />
        </>
    );
};

export const getStaticProps = async () => {
    const res = await fetch(baseUrl + "pages/132");
    const data = await res.json();

    return {
        props: {
            data,
        },
        revalidate: 600,
    };
};

export default About;
