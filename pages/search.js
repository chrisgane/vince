import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useTheme } from "../components/ThemeContext";
import { ImSpinner4 } from "react-icons/im";
import SearchForm from "../components/SearchForm";
import SearchResults from "@/components/reusable/SearchResults";
import Container from "../components/reusable/Container";
import Grid from "../components/reusable/grid/Grid";
import ProjectCard from "@/components/reusable/project-card/ProjectCard";

const initialMotionSettings = {
    opacity: 0,
    y: -20,
};

const animateMotionSettings = {
    opacity: 1,
    y: 0,
    transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: 0.2,
    },
};

const Search = () => {
    const { searchLoading, setSearchLoading } = useTheme();

    const [data, setData] = useState([]);
    const [error, setError] = useState();

    const router = useRouter();

    useEffect(() => {
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

                    setSearchLoading(false);
                    setData(data);
                } catch (err) {
                    console.log(err);

                    setError(err);
                    setSearchLoading(false);
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
            <Container>
                {searchLoading && (
                    <div className="text-4xl absolute top-1/2  -translate-x-1/2 -translate-y-1/2 animate-spin">
                        <ImSpinner4 />
                    </div>
                )}
                {data.length === 0 && !searchLoading && router.query.q && (
                    <motion.div
                        initial={initialMotionSettings}
                        animate={animateMotionSettings}
                        className="flex flex-col justify-center items-center "
                    >
                        <SearchResults searchedKeyword={router.query.q} />
                        <SearchForm className="mx-auto mb-10" />
                    </motion.div>
                )}
                {data.length > 0 && !searchLoading && (
                    <>
                        <motion.div
                            initial={initialMotionSettings}
                            animate={animateMotionSettings}
                            className="flex flex-col justify-center items-center "
                        >
                            <SearchResults
                                results={data}
                                searchedKeyword={router.query.q}
                            />
                            <SearchForm className="mx-auto mb-10" />
                        </motion.div>
                        <Grid cols={2} className="pb-20">
                            {data.map((project) => (
                                <ProjectCard project={project} />
                            ))}
                        </Grid>
                    </>
                )}
            </Container>
        </motion.div>
    );
};

export default Search;
