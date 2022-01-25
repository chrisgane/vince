import Logo from "../components/Logo";
import Hamburger from "./Hamburger";

const Navbar = () => {
    return (
        <div className={`w-full flex items-center justify-center p-6 z-30`}>
            <Logo />
            <Hamburger />
        </div>
    );
};

export default Navbar;
