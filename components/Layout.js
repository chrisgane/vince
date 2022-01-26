import Navbar from "@/components/Navbar";
import Header from "./main/Header";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
};

export default Layout;
