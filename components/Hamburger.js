import { useState } from "react";
import { useTheme } from "../components/ThemeContext";
import { motion } from "framer-motion";
import { VscMenu, VscChromeClose } from "react-icons/vsc";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const { menuOpen, setMenuOpen, activeProject, setActiveProject } =
        useTheme();

    return (
        <motion.div
            className={`absolute top-5 p-4 right-0 text-xs cursor-pointer font-semibold z-50 flex items-center uppercase tracking-widest ${
                menuOpen ? "text-white" : "text-black"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
        >
            {menuOpen ? (
                <VscChromeClose className="ml-2 text-2xl lg:text-4xl" />
            ) : (
                <AiOutlineMenu className="ml-2 text-2xl lg:text-4xl" />
            )}
        </motion.div>
    );
};

export default Navbar;
