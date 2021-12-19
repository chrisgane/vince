import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useTheme } from "../components/ThemeContext";
import { ImSpinner4 } from "react-icons/im";

import SearchForm from "../components/SearchForm";
import Footer from "../components/Footer";

import Link from "next/link";
const Search = () => {
    const { searchLoading, setSearchLoading } = useTheme();

    const [data, setData] = useState([]);

    const [error, setError] = useState();
    const router = useRouter();
    const skeletonRef = useRef();

    useEffect(() => {
        console.log(router.query.q);
        if (router.query.q === undefined) {
            setSearchLoading(false);
        }
        if (router.query.q) {
            setData([]);
            (async () => {
                try {
                    const res = await fetch(
                        `https://stupefied-antonelli.136-244-69-22.plesk.page/index.php/wp-json/wp/v2/portfolio?search=${router.query.q}&per_page=100`,
                    );
                    const data = await res.json();
                    console.log(data);
                    setSearchLoading(false);
                    setData(data);
                } catch (err) {
                    console.log(err);
                    setError(err);
                    setSearchLoading(false);

                    console.log(error);
                }
            })();
        }

        return () => {};
    }, [router.query]);

    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.4,
                },
            }}
        >
            <div className=" w-full flex flex-col justify-center items-center  px-5 py-40">
                {searchLoading && (
                    <div className="text-4xl absolute top-1/2  -translate-x-1/2 -translate-y-1/2 animate-spin">
                        <ImSpinner4 />
                    </div>
                )}
                {data.length === 0 && !searchLoading && router.query.q && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.4,
                                ease: "easeOut",
                                delay: 0.2,
                            },
                        }}
                        className="  flex flex-col justify-center items-center "
                    >
                        <div className="text-lg font-semibold max-w-lg mb-4">
                            No results. Try again
                        </div>
                        <div className="w-56">
                            <SearchForm />
                        </div>{" "}
                    </motion.div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16  px-6 md:px-12 lg:px-40">
                    {data.length > 0 &&
                        !searchLoading &&
                        data.map((project) => {
                            return (
                                <Link
                                    href={`/work/${project.slug}`}
                                    scroll={false}
                                >
                                    <a>
                                        <div className="flex flex-col justify-center items-center text-center">
                                            <div className="overflow-hidden">
                                                <motion.img
                                                    whileHover={{ scale: 1.03 }}
                                                    src={project.acf.image}
                                                    className="w-full h-full"
                                                />
                                            </div>
                                            <h3 className="font-normal text-gray-600 uppercase tracking-widest px-2 mt-6">
                                                {project.title.rendered}
                                            </h3>
                                            <p className="text-sm md:text-base lg:text-lg -mt-1 px-2">
                                                {project.acf.heading}
                                            </p>
                                        </div>
                                    </a>
                                </Link>
                            );
                        })}
                </div>
            </div>
            <Footer />
        </motion.div>
    );
};

export default Search;
