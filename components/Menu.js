import { useTheme } from "./ThemeContext";
import Link from "next/link";
import MainNav from "./MainNav";
import MenuAbout from "./MenuAbout";
import MenuFooter from "./MenuFooter";
import { motion, AnimatePresence } from "framer-motion";
import SearchForm from "./SearchForm";

const Menu = () => {
    const { menuOpen } = useTheme();

    return (
        <>
            <motion.div
                className="z-40 absolute top-0 mt-5 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 0.9 },
                }}
                exit={{ opacity: 0 }}
            >
                <Link href="/" scroll={false}>
                    <a>
                        <img
                            src={`/vince-logo-white.svg`}
                            className="w-32 lg:w-40"
                        />
                    </a>
                </Link>
            </motion.div>

            <motion.nav
                className="fixed top-0 left-0 flex flex-col items-center justify-between pt-32 sm:pt-64 w-screen h-screen z-10 bg-dark overflow-auto"
                id="mobile-nav"
                initial={{ y: "-100%" }}
                animate={{
                    y: 0,
                }}
                transition={{
                    ease: "easeInOut",
                    duration: 0.7,
                    type: "tween",
                }}
                exit={{
                    y: "100%",
                    transition: {
                        duration: 0.6,
                        delay: 0.4,
                        ease: "easeInOut",
                    },
                }}
            >
                {menuOpen && (
                    <motion.div
                        className="absolute top-0 mt-5 left-1/2  transform -translate-x-1/2"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: { delay: 0.4 },
                        }}
                        exit={{ opacity: 0 }}
                    >
                        <Link href="/" scroll={false}>
                            <a>
                                <img
                                    src={`/vince-logo-white.svg`}
                                    className="w-32 lg:w-40 z-30"
                                />
                            </a>
                        </Link>
                    </motion.div>
                )}
                <div className="w-full max-w-6xl  px-10 flex flex-col sm:flex-row  flex-nowrap justify-between  text-white z-30">
                    <AnimatePresence exitBeforeEnter>
                        {menuOpen && (
                            <div className="flex flex-col">
                                <MainNav />
                                <SearchForm nav />
                            </div>
                        )}
                    </AnimatePresence>

                    <AnimatePresence exitBeforeEnter>
                        {menuOpen && <MenuAbout />}
                    </AnimatePresence>
                </div>
                <div className="w-full flex justify-between max-w-6xl py-6 px-10   text-white z-30">
                    <AnimatePresence exitBeforeEnter>
                        {menuOpen && <MenuFooter />}
                    </AnimatePresence>
                </div>
                <img
                    src="/bg-image2.jpg"
                    className="w-full absolute top-0 right-0 object-cover h-full"
                />
            </motion.nav>
        </>
    );
};

export default Menu;
