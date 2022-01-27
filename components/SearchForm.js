import React, { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { AiOutlineLoading3Quarters, AiOutlineSearch } from "react-icons/ai";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useTheme } from "./ThemeContext";

const SearchForm = ({ nav, className = "" }) => {
    const { searchLoading, setSearchLoading, setMenuOpen } = useTheme();
    const [value, setValue] = useState("");
    const router = useRouter();

    const submit = (e) => {
        setSearchTerm();
    };

    return (
        <motion.div
            className={`w-56 border flex flex-row items-center justify-start text-xs rounded-full mt-2 px-1 py-1 ${className}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.5,
                    delay: 0.8,
                    ease: "easeOut",
                },
            }}
            exit={{
                opacity: 0,
                y: -30,
                transition: { duration: 0.3, ease: "easeIn" },
            }}
        >
            {searchLoading ? (
                <div className="animate-spin">
                    <AiOutlineLoading3Quarters className="text-gray-500 text-2xl" />
                </div>
            ) : (
                <AiOutlineSearch className="text-gray-500 text-2xl ml-1" />
            )}
            <DebounceInput
                minLength={2}
                debounceTimeout={600}
                value={value}
                onChange={(e) => {
                    setSearchLoading(true);
                    setMenuOpen(false);
                    router.push(`/search?q=${e.target.value}`).then(() => {
                        window.scrollTo(0, 0);
                    });
                }}
                className={`bg-transparent ml-2 outline-none  ${
                    nav ? "text-white" : "text-gray-700"
                }`}
                placeholder="Search"
            />
        </motion.div>
    );
};

export default SearchForm;
