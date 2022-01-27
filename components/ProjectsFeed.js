import { useEffect, useState } from "react";

import Link from "next/link";
import { motion } from "framer-motion";
import AOS from "aos";

const ProjectsFeed = ({ projects }) => {
    const [projectsState, setProjects] = useState([]);

    useEffect(() => {
        // animation fix
        setProjects([]);
        setTimeout(() => {
            setProjects(projects);
        }, 0);
    }, [projects]);

    return (
        <div className="mt-10 min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 px-6 md:px-1">
                {projectsState.map((project) => (
                    <Link
                        key={project.id}
                        id="projectItem"
                        href={`/work/${project.slug}`}
                    >
                        <a data-aos="fade-up">
                            <div className="flex flex-col justify-center items-center text-center">
                                <div className="overflow-hidden">
                                    <motion.img
                                        whileHover={{ scale: 1.03 }}
                                        src={project.acf.image}
                                        className="w-full h-full"
                                    />
                                </div>
                                <h3 className="font-normal text-gray-600 uppercase tracking-widest px-2 mt-6 mb-3">
                                    {project.title.rendered}
                                </h3>
                                <p className="text-sm md:text-base lg:text-lg -mt-1 px-2">
                                    {project.acf.heading}
                                </p>
                            </div>
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ProjectsFeed;
