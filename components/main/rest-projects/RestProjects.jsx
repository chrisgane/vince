import React from "react";
import ProjectCard from "../../reusable/project-card/ProjectCard";

const RestProjects = ({ posts }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 px-6 md:px-1 mt-8 md:mt-16">
            {posts.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
};

export default RestProjects;
