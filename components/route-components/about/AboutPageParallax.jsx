import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { ParallaxBanner } from "react-scroll-parallax";

const AboutPageParallax = ({ sections }) => {
    return (
        <ParallaxProvider>
            {sections.map(({ image, title, description }, index) => (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-2">
                    <ParallaxBanner
                        layers={[
                            {
                                image: image.url,
                                amount: 0.3,
                            },
                        ]}
                    ></ParallaxBanner>
                    <div
                        className={`flex items-center justify-content py-24 lg:py-0 px-10 ${
                            index % 2 !== 0 ? "lg:row-span-full" : ""
                        }`}
                    >
                        <div className="aboutContent text-center max-w-2xl m-auto">
                            <h3 className="uppercase">{title}</h3>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </ParallaxProvider>
    );
};

export default AboutPageParallax;
