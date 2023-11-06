import { Heading } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import Banner from "../components/Banner";

export default function Characters() {
    return (
        <>
            <Helmet>
                <title>CHARACTERS</title>
            </Helmet>

            <Banner category="characters" />

            <Heading>CHARACTERS</Heading>
        </>
    );
}
