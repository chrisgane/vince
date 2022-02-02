import Link from "next/link";
import React from "react";
import Container from "../components/reusable/Container";

const ErrorPage = () => {
    return (
        <Container className="h-full w-full flex flex-col justify-center py-20">
            <section className="md:w-1/2 mx-auto">
                <h1 className="text-center font-normal text-2xl md:text-4xl px-4 aos-init aos-animate">
                    404 Not Found!
                </h1>
                <h2 className="font-normal text-base md:text-lg lg:text-xl text-center my-6">
                    We’re sorry, the page you have looked for does not exist in
                    our database! Perhaps you would like to go to our{" "}
                    <Link href="/">
                        <a className="underline">home page</a>
                    </Link>
                    ?
                </h2>
            </section>
        </Container>
    );
};

export default ErrorPage;
