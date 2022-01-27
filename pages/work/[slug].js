import React, { useEffect } from "react";
import { useRouter } from "next/router";
import AOS from "aos";
import Title from "@/components/reusable/Title";
import { baseUrl } from "../../utils/general";
import MoreProjects from "@/components/main/more-projects/MoreProjects";

const Portfolio = ({ posts, project }) => {
    const router = useRouter();

    useEffect(() => {
        AOS.init();
    }, [router]);

    return (
        <>
            <div className="content w-full">
                <div className="w-full px-4 md:px-6 lg:px-10 xl:px-12 pt-0 h-auto flex flex-col items-center max-w-5xl justify-center mx-auto min-h-screen">
                    <Title>
                        {project &&
                            project.title?.rendered &&
                            project.title.rendered}
                    </Title>
                    <div
                        data-aos="fade"
                        className="flex mt-10 flex-row items-start justify-start relative w-full h-full "
                    >
                        <iframe
                            src={project.acf.vimeo}
                            width="1140"
                            height="520"
                            frameborder="0"
                            webkitallowfullscreen
                            mozallowfullscreen
                            allowfullscreen
                            autoplay
                        ></iframe>
                    </div>
                    <div
                        data-aos="fade-up"
                        id="main-content"
                        className=" text-lg -mt-16 sm:-mt-4 md:mt-10"
                        dangerouslySetInnerHTML={{
                            __html: project.acf.content,
                        }}
                    />
                </div>
            </div>
            <MoreProjects portfolioPosts={posts} />
        </>
    );
};

export const getStaticProps = async (ctx) => {
    const portfolioRes = await fetch(`${baseUrl}portfolio`);
    const posts = await portfolioRes.json();

    const currentPost = posts.filter(
        (item) => item.slug === ctx.params.slug,
    )[0];

    return {
        props: {
            posts,
            project: currentPost,
        },
    };
};

export const getStaticPaths = async () => {
    const portfolioRes = await fetch(`${baseUrl}portfolio`);
    const posts = await portfolioRes.json();

    const paths = posts.map((post) => ({
        params: { slug: post.slug.toString() },
    }));

    return {
        paths,
        fallback: false,
    };
};
export default Portfolio;
