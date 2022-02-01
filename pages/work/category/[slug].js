import React, { useEffect } from "react";
import PortfolioContent from "../../../components/reusable/portfolio-content/PortfolioContent";
import { useRouter } from "next/router";
import { baseUrl } from "utils/general";
import Container from "@/components/reusable/Container";

const Portfolio = ({ cats, posts, currentCat }) => {
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
            <PortfolioContent
                title={currentCat.name}
                cats={cats}
                posts={posts}
            />
        </Container>
    );
};

export const getStaticProps = async (ctx) => {
    const categoriesRes = await fetch(`${baseUrl}categories`);
    const categories = await categoriesRes.json();
    const currentCategory = categories.filter(
        (category) => category.slug === ctx.params.slug,
    )[0];

    const postsByCategoryRes = await fetch(
        `${baseUrl}portfolio?per_page=100&categories=${currentCategory.id}`,
    );
    const postsByCategory = await postsByCategoryRes.json();

    return {
        props: {
            posts: postsByCategory,
            cats: categories,
            currentCat: currentCategory,
        },
        revalidate: 600,
    };
};

export const getStaticPaths = async () => {
    const categoriesRes = await fetch(`${baseUrl}categories`);
    const categories = await categoriesRes.json();

    const paths = categories.map((category) => ({
        params: { slug: category.slug.toString() },
    }));

    return {
        paths,
        fallback: false,
    };
};

export default Portfolio;
