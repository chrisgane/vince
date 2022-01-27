import React, { useEffect } from "react";
import { useRouter } from "next/router";
import PortfolioContent from "../../components/reusable/portfolio-content/PortfolioContent";
import { baseUrl } from "../../utils/general";

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
        <PortfolioContent
            title={data?.acf?.main_header && data.acf.main_header}
            cats={cats}
            posts={posts}
        />
    );
};

export const getStaticProps = async (ctx) => {
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
    };
};

export default Portfolio;
