import React from "react";

const Container = ({ children, ...rest }) => {
    return (
        <section className="my-container mx-auto px-5" {...rest}>
            {children}
        </section>
    );
};

export default Container;
