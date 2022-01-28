import Obfuscate from "react-obfuscate";
import { motion } from "framer-motion";
import {
    fadeUpAnimateDefault,
    fadeUpExitDefault,
    fadeUpInitial,
} from "../utils/animation-settings";

const MenuFooter = () => {
    const links = [
        { name: "Facebook", url: "https://www.facebook.com/madebyvince/" },
        { name: "Twitter", url: "https://twitter.com/madebyvince" },
        { name: "Vimeo", url: "https://vimeo.com/vince" },
    ];

    return (
        <motion.div
            key="ul2"
            className="flex flex-col-reverse md:flex-row justify-between w-full pb-4"
            initial={fadeUpInitial}
            animate={{
                ...fadeUpAnimateDefault,
                transition: {
                    ...fadeUpAnimateDefault.transition,
                    duration: 0.7,
                    delay: 0.9,
                },
            }}
            exit={{
                ...fadeUpExitDefault,
                transtion: {
                    ...fadeUpExitDefault.transition,
                    duration: 0.4,
                },
            }}
        >
            <ul className="flex text-white uppercase text-xxs font-light tracking-widest z-30">
                {links.map((link) => (
                    <li className="mr-5 hover:text-gray-300" key={link.name}>
                        <a href={link.url} target="_blank">
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="text-xs font-light mb-6 md:mb-0">
                To chat, give us a call on <Obfuscate tel="020 7470 9229" /> or
                email <Obfuscate email="production@vince.co.uk" />
            </div>
        </motion.div>
    );
};

export default MenuFooter;
