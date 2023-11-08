import { Box, Grid, Heading } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import CharactersBanner from "../components/CharactersBanner";
import Loading from "./Characters/Loading";

export default function Characters() {
    const loadingArray = Array.from({ length: 20 }, () => 0);

    return (
        <>
            <Helmet>
                <title>Marvel Characters</title>
            </Helmet>

            <CharactersBanner />

            <Box w="100%" minH="100vh" bg="whitesmoke" px="350px">
                <Grid
                    templateColumns="repeat(6, 1fr)"
                    py="50px"
                    rowGap="50px"
                    gap="10px"
                >
                    {loadingArray.map((dummy, index) => (
                        <Loading key={index} />
                    ))}
                </Grid>
            </Box>
        </>
    );
}
