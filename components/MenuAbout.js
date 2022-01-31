import { motion } from "framer-motion";
import {
    fadeUpAnimateDefault,
    fadeUpInitial,
    fadeUpExitDefault,
} from "../utils/animation-settings";

const MenuAbout = () => {
    return (
        <motion.div
            className="max-w-sm "
            initial={fadeUpInitial}
            animate={fadeUpAnimateDefault}
            exit={fadeUpExitDefault}
            key="ma"
        >
            <p className="uppercase tracking-big font-semibold text-sm mb-6">
                this is vince
            </p>
            <p className="text-xxs md:text-sm mb-4">
                an award winning creative production company based in London.
            </p>
            <p className="text-xxs md:text-sm">
                Est. in 2011, we&apos;re experts in creating TV Commercials,
                digital films, DRTV, idents and brand films through our superb
                roster of directors.
            </p>
        </motion.div>
    );
};

export default MenuAbout;
