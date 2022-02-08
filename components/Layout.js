import { useEffect } from "react";
import AOS from "aos";
import Header from "./main/Header";
import Footer from "@/components/Footer";

const Layout = ({ children }) => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
