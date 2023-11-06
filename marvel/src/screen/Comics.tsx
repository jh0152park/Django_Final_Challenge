import { Heading } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import Banner from "../components/Banner";

export default function Comics() {
    return (
        <>
            <Helmet>
                <title>COMICS</title>
            </Helmet>

            <Banner category="comics" />

            <Heading>COMICS</Heading>
        </>
    );
}
