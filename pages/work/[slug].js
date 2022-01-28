import React, { useEffect } from "react";
import { useRouter } from "next/router";
import AOS from "aos";
import Title from "../../components/reusable/Title";
import MoreProjects from "../../components/main/more-projects/MoreProjects";
import Error from "next/error";
import { ImSpinner4 } from "react-icons/im";
import { baseUrl } from "../../utils/general";

const Portfolio = ({ posts, project }) => {
    const router = useRouter();

    useEffect(() => {
        AOS.init();
    }, [router]);

    if (!router.isFallback && !project) {
        return <Error statusCode={404} />;
    }

    return (
        <>
            <div className="content w-full">
                <div className="w-full px-4 md:px-6 lg:px-10 xl:px-12 pt-0 h-auto flex flex-col items-center max-w-5xl justify-center mx-auto min-h-screen">
                    {router.isFallback ? (
                        <div className="text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin">
                            <ImSpinner4 />
                        </div>
                    ) : (
                        <>
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
                        </>
                    )}
                </div>
            </div>
            <MoreProjects portfolioPosts={posts} />
        </>
    );
};

export const getStaticProps = async (ctx) => {
    const portfolioRes = await fetch(`${baseUrl}portfolio?per_page=100`);
    const posts = await portfolioRes.json();

    const currentPost = posts.filter((item) => item.slug === ctx.params.slug);
    console.log(currentPost);
    return {
        props: {
            posts,
            project: currentPost[0] || null,
        },
    };
};

export const getStaticPaths = async () => {
    const portfolioRes = await fetch(`${baseUrl}portfolio?per_page=100`);
    const posts = await portfolioRes.json();

    const paths = posts.map((post) => ({
        params: { slug: post.slug.toString() },
    }));

    return {
        paths,
        fallback: true,
    };
};
export default Portfolio;
