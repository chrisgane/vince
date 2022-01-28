import React from "react";
import useSWR from "swr";
import Obfuscate from "react-obfuscate";
import { motion } from "framer-motion";
import {
    fadeRightExit,
    fadeRightInitial,
    fadeRightAnimate,
} from "../utils/animation-settings";

const Contact = () => {
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error } = useSWR(
        "https://stupefied-antonelli.136-244-69-22.plesk.page/index.php/wp-json/wp/v2/pages/132",
        fetcher,
    );
    const socials = [
        { name: "Facebook", url: "https://www.facebook.com/madebyvince/" },
        { name: "Twitter", url: "https://twitter.com/madebyvince" },
        { name: "Vimeo", url: "https://vimeo.com/vince" },
    ];

    return (
        <>
            {data && (
                <motion.div
                    initial={fadeRightInitial}
                    animate={fadeRightAnimate}
                    exit={fadeRightExit}
                >
                    <div className="pt-0 md:pt-16  px-4 pb-48">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto ">
                            <div className="">
                                <div className="text-gray-400 font-light text-sm  tracking-wide mb-6">
                                    CONTACT US
                                </div>
                                <div className="text-2xl font-bold text-gray-800">
                                    <div className="my-2">
                                        +44 (0)20 7470 9229
                                    </div>{" "}
                                    <Obfuscate email="production@vince.co.uk" />
                                </div>
                            </div>
                            <div className="my-10 md:my-0">
                                <div className="text-gray-400 font-light text-sm  tracking-wide mb-6">
                                    FIND US
                                </div>
                                <div className="text-2xl font-bold text-gray-800">
                                    <div className="">
                                        VINCE
                                        <br />
                                        1st floor 40
                                        <br />
                                        Drury Lane
                                        <br />
                                        London, WC2B 5RR.
                                    </div>{" "}
                                </div>
                            </div>
                            <div className="">
                                <div className="text-gray-400 font-light text-sm  tracking-wide mb-6">
                                    FOLLOW US
                                </div>
                                <div className="text-2xl font-bold text-gray-800">
                                    <ul className="flex items-center my-6 lg:my-0">
                                        {socials.map((item) => (
                                            <li
                                                key={item.name}
                                                className="mr-5 hover:text-gray-300"
                                            >
                                                <a
                                                    href={item.url}
                                                    target="_blank"
                                                >
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </>
    );
};

export default Contact;
