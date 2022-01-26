import React from "react";

const Title = ({ children }) => {
    return (
        <h1
            data-aos="fade"
            className="text-center font-normal text-2xl md:text-4xl px-4"
        >
            {children}
        </h1>
    );
};

export default Title;
