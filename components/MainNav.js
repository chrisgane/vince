import { useState } from "react";
import { useTheme } from "./ThemeContext";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const MainNav = () => {
    const links = [
        { name: "home", url: "/" },
        { name: "about", url: "/about" },
        { name: "work", url: "/work" },
    ];
    const { menuOpen, setMenuOpen } = useTheme();

    return (
        <motion.ul
            className="text-white  uppercase text-base md:text-3xl z-30  "
            initial={{ opacity: 0, y: 30 }}
            animate={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.5,
                    delay: 0.7,
                    ease: "easeOut",
                },
            }}
            exit={{
                opacity: 0,
                y: -30,
                transition: { duration: 0.4, ease: "easeIn" },
            }}
            key="ul"
        >
            {links.map((link) => (
                <motion.li
                    id="headerLink"
                    whileTap={{ scale: 0.9 }}
                    className="mb-4 md:mb-6   w-auto font-semibold border-gray-100 tracking-wider transition duration-100"
                    key={link.name}
                    onClick={() => setMenuOpen(false)}
                >
                    <Link
                        prefetch={false}
                        href={link.url}
                        onClick={() => setMenuOpen(false)}
                    >
                        {link.name}
                    </Link>
                </motion.li>
            ))}
        </motion.ul>
    );
};

export default MainNav;
