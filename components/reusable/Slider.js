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
    let sliderRef = useRef();

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.addEventListener("touchstart", touchStart, {
                passive: true,
            });
            containerRef.current.addEventListener(
                "touchmove",
                preventTouch,
                {
                    passive: false,
                },
                { passive: true },
            );
        }

        return () => {
            if (containerRef.current) {
                containerRef.current.removeEventListener(
                    "touchstart",
                    touchStart,
                    {
                        passive: false,
                    },
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

    const fixSlideTimer = () => {
        sliderRef.current.slickPause();
        sliderRef.current.slickPlay();
    };

    return (
        <div ref={containerRef}>
            <ReactSlick
                {...settings}
                onSwipe={fixSlideTimer}
                {...props}
                ref={sliderRef}
            >
                {children}
            </ReactSlick>
        </div>
    );
};

export default Slider;
