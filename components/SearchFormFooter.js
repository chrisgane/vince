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
} from "../utils/animation-settings";

const SearchForm = ({ nav }) => {
    const { searchLoading, setSearchLoading, setMenuOpen } = useTheme();
    const [value, setValue] = useState("");
    const router = useRouter();

    return (
        <motion.div
            className="border flex flex-row items-center justify-center text-xs rounded-full  px-1 py-1"
            initial={fadeUpInitial}
            animate={fadeUpAnimateDefault}
            exit={fadeUpExitDefault}
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
                className={`bg-transparent ml-2 outline-none py-3 text-white `}
                placeholder="Search"
            />
        </motion.div>
    );
};

export default SearchForm;
