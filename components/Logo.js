import { useState } from "react";
import { useTheme } from "./ThemeContext";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Logo = () => {
    const { menuOpen, setMenuOpen } = useTheme();

    return (
        <div className=" z-30 h-40">
            <AnimatePresence>
                {!menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <Link href="/" scroll={false}>
                            <a>
                                <img
                                    src={`/vince-logo-blck.svg`}
                                    className="w-32 lg:w-40 z-30"
                                />
                            </a>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Logo;
