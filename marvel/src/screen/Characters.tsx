import { Box, Heading } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import Banner from "../components/Banner";

export default function Characters() {
    return (
        <>
            <Helmet>
                <title>Marvel Characters</title>
            </Helmet>

            <Banner category="characters" />

            <Heading>CHARACTERS</Heading>
            <Box
                ml="200px"
                w="150px"
                h="150px"
                bgColor="palevioletred"
                background="linear-gradient(-45deg, transparent 15px, palevioletred 0)"
            ></Box>
        </>
    );
}
