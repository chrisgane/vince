import React from "react";

const AboutPageContent = ({ content, image }) => {
    return (
        <div className="py-24 px-3">
            <div
                data-aos="fade-up"
                className="aboutContent text-center max-w-4xl m-auto"
                dangerouslySetInnerHTML={{
                    __html: content,
                }}
            />
            <img
                data-aos="fade-up"
                src={image}
                className="m-auto w-full max-w-4xl mt-24"
            />
        </div>
    );
};

export default AboutPageContent;
