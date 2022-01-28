import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { ParallaxBanner } from "react-scroll-parallax";

const AboutPageParallax = ({ sections }) => {
    return (
        <ParallaxProvider>
            {sections.map(({ image, content }, index) => (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-2">
                    <ParallaxBanner
                        layers={[
                            {
                                image: image,
                                amount: 0.3,
                            },
                        ]}
                    ></ParallaxBanner>
                    <div
                        className={`flex items-center justify-content py-24 lg:py-0 px-10 ${
                            index % 2 !== 0 ? "row-span-full" : ""
                        }`}
                    >
                        <div
                            className="aboutContent text-center max-w-2xl m-auto"
                            dangerouslySetInnerHTML={{
                                __html: content,
                            }}
                        />
                    </div>
                </div>
            ))}
        </ParallaxProvider>
    );
};

export default AboutPageParallax;
