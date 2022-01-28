import React from "react";

const HeaderTitle = ({ title, image }) => {
    return (
        <div
            data-aos="fade-up"
            className="w-full h-screen flex justify-center items-center -mt-28 "
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
