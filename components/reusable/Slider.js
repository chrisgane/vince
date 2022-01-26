import React, { useRef, useEffect } from "react";
import ReactSlick from "react-slick";

let firstClientX, clientX;

const preventTouch = (e) => {
    const minValue = 5; // threshold

    clientX = e.touches[0].clientX - firstClientX;

    // Vertical scrolling does not work when you start swiping horizontally.
    if (Math.abs(clientX) > minValue) {
        e.preventDefault();
        e.returnValue = false;

        return false;
    }
};

const touchStart = (e) => {
    firstClientX = e.touches[0].clientX;
};

const Slider = ({ settings, children, ...props }) => {
    let containerRef = useRef();

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.addEventListener("touchstart", touchStart);
            containerRef.current.addEventListener("touchmove", preventTouch, {
                passive: false,
            });
        }

        return () => {
            if (containerRef.current) {
                containerRef.current.removeEventListener(
                    "touchstart",
                    touchStart,
                );
                containerRef.current.removeEventListener(
                    "touchmove",
                    preventTouch,
                    {
                        passive: false,
                    },
                );
            }
        };
    });

    return (
        <div ref={containerRef}>
            <ReactSlick {...settings} {...props}>
                {children}
            </ReactSlick>
        </div>
    );
};

export default Slider;
