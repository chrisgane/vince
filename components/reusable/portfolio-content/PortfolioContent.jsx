import MobileSorting from "@/components/MobileSorting";
import ProjectsFeed from "@/components/ProjectsFeed";
import React from "react";
import Title from "../Title";

const PortfolioContent = ({ title, cats, posts }) => {
    return (
        <section className="w-full flex flex-col items-center justify-center pb-20">
            <Title>{title}</Title>
            <MobileSorting categories={cats} />
            <ProjectsFeed projects={posts} />
        </section>
    );
};

export default PortfolioContent;
