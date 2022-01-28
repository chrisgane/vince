import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    scaleWhileHover,
    scaleWhileTap,
} from "../../../utils/animation-settings";

const ProjectCard = ({ project }) => {
    return (
        <Link prefetch={false} href={`/work/${project.slug}`}>
            <a>
                <div
                    data-aos="fade-up"
                    className="flex flex-col justify-center"
                >
                    <div className="overflow-hidden">
                        <motion.div
                            whileHover={scaleWhileHover}
                            whileTap={scaleWhileTap}
                            style={{ fontSize: 0 }}
                        >
                            <Image
                                src={project.acf.image}
                                width="800"
                                height="533"
                                placeholder="blur"
                                blurDataURL={project.acf.image}
                            />
                        </motion.div>
                    </div>
                    <h3 className="font-normal text-base md:text-lg lg:text-xl text-center my-6">
                        {project.title.rendered}
                    </h3>
                    <p className="text-sm tracking-wider mt-0 px-2  text-center">
                        {project.acf.heading}
                    </p>
                </div>
            </a>
        </Link>
    );
};

export default ProjectCard;
