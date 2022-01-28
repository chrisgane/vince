export const scaleWhileHover = {
    scale: 1.04,
    transition: {
        duration: 0.3,
        ease: "easeOut",
    },
};

export const scaleWhileTap = {
    scale: 1.0,
    transition: {
        duration: 0.3,
        ease: "easeOut",
    },
};

export const fadeUpInitial = {
    opacity: 0,
    y: 30,
};

export const fadeUpAnimateDefault = {
    opacity: 1,
    y: 0,
    transition: {
        duration: 0.5,
        delay: 0.8,
        ease: "easeOut",
    },
};

export const fadeUpExitDefault = {
    opacity: 0,
    y: -30,
    transition: { duration: 0.3, ease: "easeIn" },
};

export const fadeRightInitial = {
    opacity: 0,
    x: -20,
};

export const fadeRightAnimate = {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
};

export const fadeRightExit = {
    opacity: 0,
    x: -20,
    transition: { duration: 0.4, ease: "easeOut" },
};
