import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const MobileSorting = ({ categories }) => {
    const router = useRouter();
    return (
        <ul
            initial={{}}
            className="flex flex-wrap items-center justify-center w-full   uppercase tracking-widest text-xxs xl:text-xs font-medium mb-6 mt-6"
        >
            <Link href={`/work`}>
                <motion.li
                    whileTap={{ scale: 1 }}
                    className={`${
                        router.asPath === "/work" && "border-black"
                    } py-2 px-4 mr-2 mb-2 border  cursor-pointer  hover:bg-black hover:text-white`}
                >
                    <div>ALL</div>
                </motion.li>
            </Link>
            {categories.length > 0 &&
                categories
                    .filter((item) => item.slug !== "uncategorized")
                    .map((category) => (
                        <Link
                            key={category.id}
                            href={`/work/category/${category.slug}`}
                        >
                            <motion.li
                                whileTap={{ scale: 1 }}
                                className={`${
                                    router.query.slug === category.slug &&
                                    "border-black"
                                } py-2 px-4 mr-2 mb-2  border hover:bg-black hover:text-white cursor-pointer whitespace-nowrap `}
                            >
                                <div>{category.name}</div>
                            </motion.li>
                        </Link>
                    ))}
        </ul>
    );
};

export default MobileSorting;
