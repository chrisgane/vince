import { useTheme } from "./ThemeContext";
import Link from "next/link";
import MainNav from "./MainNav";
import MenuAbout from "./MenuAbout";
import MenuFooter from "./MenuFooter";
import { motion, AnimatePresence } from "framer-motion";
import SearchForm from "./SearchForm";
import { VscChromeClose } from "react-icons/vsc";
import Image from "next/image";

const Menu = () => {
    const { menuOpen, setMenuOpen } = useTheme();

    return (
        <motion.div
            className="fixed top-0 left-0 flex flex-col items-center justify-between pt-32 sm:pt-64 w-screen h-screen z-40 bg-dark overflow-auto"
            id="mobile-nav-wrapper"
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
            <motion.div
                className={`absolute top-5 p-4 right-5 text-xs cursor-pointer font-semibold z-50 flex items-center uppercase tracking-widest text-white`}
                onClick={() => setMenuOpen(!menuOpen)}
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                }}
                exit={{ opacity: 0 }}
            >
                <VscChromeClose className="ml-2 text-2xl lg:text-4xl" />
            </motion.div>
            <AnimatePresence exitBeforeEnter>
                {menuOpen && (
                    <motion.div
                        className="absolute top-0 mt-5 left-1/2  transform -translate-x-1/2"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: { delay: 0.4 },
                        }}
                        exit={{ opacity: 0 }}
                        style={{ marginLeft: "5px", maxWidth: "160px" }}
                    >
                        <Link href="/">
                            <a>
                                <Image
                                    src={`/vince-logo-white.svg`}
                                    className="w-32 lg:w-40 z-40"
                                    width={170}
                                    height={52}
                                    alt="Vince Logo"
                                />
                            </a>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="w-full max-w-6xl  px-10 flex flex-col sm:flex-row  flex-nowrap justify-between  text-white z-40">
                <AnimatePresence exitBeforeEnter>
                    {menuOpen && (
                        <div className="flex flex-col">
                            <nav>
                                <MainNav />
                            </nav>
                            <SearchForm className="mb-6" isWhite />
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
        </motion.div>
    );
};

export default Menu;
