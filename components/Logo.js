import Link from "next/link";
import { useTheme } from "./ThemeContext";
import { motion } from "framer-motion";
import Image from "next/image";

const Logo = () => {
    const { menuOpen } = useTheme();

    return (
        <div className="z-30 h-12 md:h-16" style={{ marginLeft: "22px" }}>
            {!menuOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ maxWidth: "160px" }}
                >
                    <Link href="/">
                        <a>
                            <Image
                                src={`/vince-logo-blck.svg`}
                                className="w-32 lg:w-40 z-30"
                                alt="Vince"
                                width={170}
                                height={52}
                            />
                        </a>
                    </Link>
                </motion.div>
            )}
        </div>
    );
};

export default Logo;
