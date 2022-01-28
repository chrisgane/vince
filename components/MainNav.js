import Link from "next/link";
import { useTheme } from "./ThemeContext";
import { motion } from "framer-motion";
import {
    fadeUpAnimateDefault,
    fadeUpInitial,
    fadeUpExitDefault,
} from "../utils/animation-settings";

const MainNav = () => {
    const links = [
        { name: "home", url: "/" },
        { name: "about", url: "/about" },
        { name: "work", url: "/work" },
        { name: "contact", url: "/contact" },
    ];
    const { menuOpen, setMenuOpen } = useTheme();

    return (
        <motion.ul
            className="text-white uppercase text-base md:text-3xl z-30  "
            initial={fadeUpInitial}
            animate={{
                ...fadeUpAnimateDefault,
                transition: {
                    ...fadeUpAnimateDefault.transition,
                    delay: 0.7,
                },
            }}
            exit={{
                ...fadeUpExitDefault,
                transtion: {
                    ...fadeUpAnimateDefault.transition,
                    duration: 0.4,
                },
            }}
            key="ul"
        >
            {links.map((link) => (
                <motion.li
                    id="headerLink"
                    whileTap={{ scale: 0.9 }}
                    className="mb-4 md:mb-6 w-auto font-semibold border-gray-100 tracking-wider transition duration-100"
                    key={link.name}
                    onClick={() => setMenuOpen(false)}
                >
                    <div className="relative w-max">
                        <Link
                            prefetch={false}
                            href={link.url}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    </div>
                </motion.li>
            ))}
        </motion.ul>
    );
};

export default MainNav;
