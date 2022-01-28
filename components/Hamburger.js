import { useTheme } from "../components/ThemeContext";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const { menuOpen, setMenuOpen } = useTheme();

    return (
        <div
            className={`absolute top-5 p-4 right-0 text-xs cursor-pointer font-semibold z-10 flex items-center uppercase tracking-widest text-black
            `}
            onClick={() => setMenuOpen(!menuOpen)}
        >
            <AiOutlineMenu className="ml-2 text-2xl lg:text-4xl" />
        </div>
    );
};

export default Navbar;
