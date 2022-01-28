import React from "react";

const Grid = ({ children, className = "", cols = 3 }) => {
    return (
        <div
            className={`grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-${cols} gap-16 px-6 md:px-1 ${className}`}
        >
            {children}
        </div>
    );
};

export default Grid;
