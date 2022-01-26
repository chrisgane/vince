import { useState, useEffect } from "react";
import Logo from "./Logo";
import SearchFormFooter from "./SearchFormFooter";
import Router, { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";
import Obfuscate from "react-obfuscate";
import AOS from "aos";

const Footer = () => {
    const router = useRouter();
    const socials = [
        { name: "Facebook", url: "https://www.facebook.com/madebyvince/" },
        { name: "Twitter", url: "https://twitter.com/madebyvince" },
        { name: "Vimeo", url: "https://vimeo.com/vince" },
    ];
    const links = [
        { name: "Work", url: "/work" },
        { name: "About", url: "/about" },
        { name: "Privacy policy", url: "/privacy-policy" },
        { name: "Terms of use", url: "/terms" },
    ];
    const headerStyle = "font-black text-3xl text-white mb-12";
    useEffect(() => {
        AOS.init();
    }, []);

    const fullYear = () => {
        return new Date().getFullYear();
    };

    return (
        <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            className="w-full bg-black  text-white"
        >
            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-20 py-20">
                <div data-aos="fade-up">
                    <p className={headerStyle}>Site map</p>
                    <ul>
                        {links.map((link) => (
                            <li
                                key={link.name}
                                className="uppercase tracking-widest mb-3 hover:text-gray-200"
                            >
                                <Link href={link.url}>
                                    <a>{link.name}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div data-aos="fade-up">
                    <p className={headerStyle}>Contact us</p>
                    <div>
                        <p className="text-base">
                            VINCE
                            <br /> 1st floor <br /> 40 Drury Lane
                            <br /> London, WC2B 5RR.
                        </p>
                        <p className="text-base">
                            T: <Obfuscate tel="+44 (0)20 7470 9229" />
                        </p>
                        <p className="-mt-4 text-base">
                            <Obfuscate email="production@vince.co.uk" />
                        </p>
                    </div>
                </div>
                <div data-aos="fade-up">
                    <p className={headerStyle}> Join Vince?</p>
                    <div>
                        <p className={"text-base"}>
                            Vince is always looking for exceptional individuals
                            in the field of content creation; producers,
                            directors, dops and mograph ops - so why not give us
                            a shout at{" "}
                            <Obfuscate email="haveword@vince.co.uk" /> with your
                            cover letter and CV. Thanks!
                        </p>
                    </div>
                </div>
                <div data-aos="fade-up">
                    <p className={headerStyle}> Searching for something?</p>
                    <div>
                        <SearchFormFooter />
                    </div>
                </div>
            </div>
            <div className="bottom-info bg-black flex flex-col lg:flex-row items-center justify-center border-t border-gray-900 py-3">
                <img
                    src={`/vince-logo-white.svg`}
                    className="logo w-24 my-6 lg:my-0 lg:mr-0"
                />
                <p className="mt-6 mx-10 text-center">
                    © Copyright {fullYear()}. VINCE MEDIA Ltd. No. 07708529. All
                    rights reserved.
                </p>
                <ul className="flex items-center my-6 lg:my-0">
                    {socials.map((item) => (
                        <li
                            key={item.name}
                            className="ml-5 hover:text-gray-300"
                        >
                            <a href={item.url}>{item.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.footer>
    );
};

export default Footer;
