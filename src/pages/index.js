import React, {useEffect} from "react";
import {useRouter} from "next/router";
import {getCookie} from "@/helpers/common";

const Home = () => {
    const allowedPages = getCookie(process.env.NEXT_PUBLIC_ALLOWED_PAGES_COOKIE);
    const router = useRouter();

    useEffect(() => {
        if (allowedPages) {
            router.push(allowedPages[0]);
        } else {
            router.push("/sign-in");
        }
    });
    return <div></div>;
};

export default Home;
