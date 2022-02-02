import React from "react";

const HeaderTitle = ({ title, image }) => {
    return (
        <div
            data-aos="fade-up"
            className="header-title w-full flex justify-center items-center"
            style={{
                backgroundImage: `url(${image})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <h1
                data-aos="fade-up"
                className="text-white text-6xl font-extrabold uppercase"
            >
                {title}
            </h1>
        </div>
    );
};

export default HeaderTitle;
