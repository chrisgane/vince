import React from "react";
import Grid from "../../reusable/grid/Grid";
import ProjectCard from "../../reusable/project-card/ProjectCard";

const MoreProjects = ({ portfolioPosts }) => {
    return (
        <section className="mb-16">
            <h2
                data-aos="fade-up"
                className="text-center font-light text-3xl mt-24 mb-10"
            >
                More projects
            </h2>
            <Grid className="md:px-10">
                {portfolioPosts &&
                    portfolioPosts
                        .sort(function (a, b) {
                            return 0.5 - Math.random();
                        })
                        .slice(0, 3)
                        .map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
            </Grid>
        </section>
    );
};

export default MoreProjects;
