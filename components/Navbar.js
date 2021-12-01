import { useState } from "react";
import Logo from "../components/Logo";

import Link from "next/link";
import { useTheme } from "../components/ThemeContext";

import Hamburger from "./Hamburger";

const Navbar = () => {
    const { menuOpen } = useTheme();
    return (
        <div
            className={` w-full  flex items-center justify-center  p-6  z-30 `}
        >
            <Logo />
            <Hamburger />
        </div>
    );
};

export default Navbar;
