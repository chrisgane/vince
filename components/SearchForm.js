import React, { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { AiOutlineLoading3Quarters, AiOutlineSearch } from "react-icons/ai";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useTheme } from "./ThemeContext";
import {
    fadeUpAnimateDefault,
    fadeUpExitDefault,
    fadeUpInitial,
} from "utils/animation-settings";

const SearchForm = ({ isWhite = false, big = false, className = "" }) => {
    const { searchLoading, setSearchLoading, setMenuOpen } = useTheme();
    const [value, setValue] = useState("");
    const router = useRouter();

    const color = isWhite ? "text-white" : "text-gray-700";

    return (
        <motion.div
            className={`w-56 border flex flex-row items-center justify-start text-xs rounded-full mt-2 px-1 py-1 ${className} ${
                big && "w-full pl-3"
            }`}
            initial={fadeUpInitial}
            animate={fadeUpAnimateDefault}
            exit={fadeUpExitDefault}
        >
            {searchLoading ? (
                <div className={`animate-spin ${big ? "ml-2" : "ml-1"}`}>
                    <AiOutlineLoading3Quarters
                        className={`text-2xl ${color} `}
                    />
                </div>
            ) : (
                <AiOutlineSearch className={`text-2xl ml-1 ${color}`} />
            )}
            <DebounceInput
                minLength={2}
                debounceTimeout={600}
                value={value}
                onChange={(e) => {
                    if (e.target.value === "") {
                        setSearchLoading(false);
                    } else {
                        setSearchLoading(true);
                        setMenuOpen(false);
                        router.push(`/search?q=${e.target.value}`).then(() => {
                            window.scrollTo(0, 0);
                        });
                    }
                }}
                className={`search-input text-base bg-transparent ml-2 outline-none ${color} ${
                    big && "py-3"
                }`}
                placeholder="Search"
            />
        </motion.div>
    );
};

export default SearchForm;
