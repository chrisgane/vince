import React from "react";

const Grid = ({ children, className = "", cols = 3 }) => {
    let gridCols = "lg:grid-cols-1";

    switch (cols) {
        case 2:
            gridCols = "lg:grid-cols-2";
            break;
        case 3:
            gridCols = "lg:grid-cols-3";
            break;
        case 4:
            gridCols = "lg:grid-cols-4";
            break;
    }

    return (
        <div
            className={`grid grid-cols-1 w-full md:grid-cols-2 ${gridCols} gap-16 px-6 md:px-1 ${className}`}
        >
            {children}
        </div>
    );
};

export default Grid;
