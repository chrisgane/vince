import React from "react";
import Menu from "@/components/Menu";
import { useTheme } from "../ThemeContext";
import { AnimatePresence } from "framer-motion";
import { useDisableBodyScroll } from "../../hooks/useDisableBodyScroll";
import Navbar from "../Navbar";

const Header = () => {
    const { menuOpen, setMenuOpen } = useTheme();
    useDisableBodyScroll(menuOpen);

    return (
        <header>
            <Navbar />
            <AnimatePresence exitBeforeEnter>
                {menuOpen && <Menu />}
            </AnimatePresence>
        </header>
    );
};

export default Header;
