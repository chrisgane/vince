import React from "react";

const Container = ({
    children,
    expandHeight = true,
    wider = false,
    className = "",
    ...rest
}) => {
    return (
        <section
            className={`my-container relative ${wider && "wider"} ${
                expandHeight && "expand-height"
            } mx-auto px-5 ${className}`}
            {...rest}
        >
            {children}
        </section>
    );
};

export default Container;
