import React, { useEffect } from "react";
import { useRouter } from "next/router";
import PortfolioContent from "../../components/reusable/portfolio-content/PortfolioContent";
import { baseUrl } from "../../utils/general";
import Container from "@/components/reusable/Container";
import Promise from "promise";
import SeoTags from "../../components/reusable/seo-tags/SeoTags";

const Portfolio = ({ posts, cats, data }) => {
    const router = useRouter();

    useEffect(() => {
        if (process.env.NEXT_PUBLIC_ENV === "development") {
            const handleRouteChange = (url, { shallow }) => {
                console.log(
                    `App is changing to ${url} ${
                        shallow ? "with" : "without"
                    } shallow routing`,
                );
            };

            router.events.on("routeChangeStart", handleRouteChange);

            return () => {
                router.events.off("routeChangeStart", handleRouteChange);
            };
        }
    }, []);

    return (
        <Container>
            <SeoTags
                metaTitle={data.acf.meta_title}
                metaDescription={data.acf.meta_description}
            />
            <PortfolioContent
                title={data?.acf?.main_header && data.acf.main_header}
                cats={cats}
                posts={posts}
            />
        </Container>
    );
};

export const getStaticProps = async () => {
    const getData = () => {
        return Promise.all([
            fetch(baseUrl + "portfolio").then((res) => res.json()),
            fetch(baseUrl + "categories").then((res) => res.json()),
            fetch(baseUrl + "pages/102").then((res) => res.json()),
        ]);
    };

    const [portfolioData, categoriesData, workPageData] = await getData().catch(
        (err) => console.log(err),
    );

    return {
        props: {
            posts: portfolioData,
            cats: categoriesData,
            data: workPageData,
        },
        revalidate: 600,
    };
};

export default Portfolio;
