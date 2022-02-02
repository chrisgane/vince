import React from "react";
import Image from "next/image";

const AboutPageContent = ({ content, image }) => {
    return (
        <div className="py-24 px-3">
            <div
                data-aos="fade-up"
                className="aboutContent text-center m-auto"
                dangerouslySetInnerHTML={{
                    __html: content,
                }}
            />
            {image && (
                <div className="m-auto w-full mt-24 center flex justify-center">
                    <Image
                        data-aos="fade-up"
                        src={image.url}
                        width={image.width}
                        height={image.height}
                        alt={image.alt}
                    />
                </div>
            )}
        </div>
    );
};

export default AboutPageContent;
