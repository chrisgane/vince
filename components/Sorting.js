import { useTheme } from "./ThemeContext";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const Sorting = () => {
    const { categories, setPage } = useTheme();

    const router = useRouter();

    return (
        <ul className="absolute bottom-0 flex flex-wrap items-center uppercase tracking-widest text-xxs xl:text-xs font-medium mb-6 max-w-lg">
            <motion.li
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1 }}
                className={`${
                    !router.query.id && "border-black"
                } py-2 px-4 mr-2 mb-2 rounded-full border  cursor-pointer  `}
                onClick={() => {
                    setPage(1);

                    router.push(`/portfolio`);
                }}
            >
                <div>ALL</div>
            </motion.li>
            {categories.length > 0 &&
                categories.map((category) => (
                    <motion.li
                        key={category.id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 1 }}
                        className={`${
                            router.query.category === category.name &&
                            "border-black"
                        } py-2 px-4 mr-2 mb-2 rounded-full border  cursor-pointer  `}
                        onClick={() => {
                            setPage(1);

                            router.push(
                                `?category=${category.name}&id=${category.id}`,
                            );
                        }}
                    >
                        <div>{category.name}</div>
                    </motion.li>
                ))}
        </ul>
    );
};

export default Sorting;
