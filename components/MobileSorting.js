import { useTheme } from "./ThemeContext";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const MobileSorting = () => {
    const {
        activeProject,
        setActiveProject,
        setProjects,
        projects,
        categories,
        setPage,
        setCategories,
    } = useTheme();

    const router = useRouter();
    return (
        <motion.ul
            exit={{
                opacity: 0,
                y: -20,
                transition: { duration: 0.3, ease: "easeIn" },
            }}
            initial={{
                opacity: 0,
                y: -30,
            }}
            animate={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.8,
                    ease: "easeOut",
                },
            }}
            className="flex flex-wrap items-center justify-center w-full   uppercase tracking-widest text-xxs xl:text-xs font-medium mb-6 mt-6"
        >
            <motion.li
                whileTap={{ scale: 1 }}
                className={`${
                    !router.query.id && "border-black"
                } py-2 px-4 mr-2 mb-2 border  cursor-pointer  hover:bg-black hover:text-white`}
                onClick={() => {
                    setPage(1);
                    router.push(`/work`);
                }}
            >
                <div>ALL</div>
            </motion.li>
            {categories.length > 0 &&
                categories
                    .filter((item) => item.slug !== "uncategorized")
                    .map((category) => (
                        <motion.li
                            key={category.id}
                            whileTap={{ scale: 1 }}
                            className={`${
                                router.query.category === category.name &&
                                "border-black"
                            } py-2 px-4 mr-2 mb-2  border hover:bg-black hover:text-white cursor-pointer whitespace-nowrap `}
                            onClick={() => {
                                setPage(1);
                                router.push(
                                    {
                                        pathname: router.pathname,
                                        query: {
                                            category: category.name,
                                            id: category.id,
                                        },
                                    },
                                    undefined,
                                    { scroll: false },
                                );
                            }}
                        >
                            <div>{category.name}</div>
                        </motion.li>
                    ))}
        </motion.ul>
    );
};

export default MobileSorting;
