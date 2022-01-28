import Grid from "@/components/reusable/grid/Grid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MoreProjects = ({ portfolioPosts }) => {
    return (
        <>
            <h2
                data-aos="fade-up"
                className="text-center font-light text-3xl mt-24 mb-10"
            >
                More projects
            </h2>
            <Grid>
                {portfolioPosts &&
                    portfolioPosts
                        .sort(function (a, b) {
                            return 0.5 - Math.random();
                        })
                        .slice(0, 3)
                        .map((project) => (
                            <Link href={`/work/${project.slug}`}>
                                <a>
                                    <div
                                        data-aos="fade-up"
                                        className="flex flex-col justify-center items-center text-center"
                                    >
                                        <div className="overflow-hidden">
                                            <Image
                                                src={project.acf.image}
                                                width="470"
                                                height="313"
                                                placeholder="blur"
                                                blurDataURL={project.acf.image}
                                            />
                                        </div>
                                        <h3 className="font-normal text-xl text-gray-600 uppercase tracking-widest px-2 mt-8">
                                            {project.title.rendered}
                                        </h3>
                                        <p className="text-base tracking-wider mt-0 px-2">
                                            {project.acf.heading}
                                        </p>
                                    </div>
                                </a>
                            </Link>
                        ))}
            </Grid>
        </>
    );
};

export default MoreProjects;
