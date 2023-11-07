import { Box, Heading } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import { listComics } from "../api";
import ComicsBanner from "../components/ComicsBanner";

export default function Comics() {
    const { isLoading, data } = useQuery(["comics"], listComics);
    const Comics = data?.data.results;

    console.log(Comics);

    return (
        <>
            <Helmet>
                <title>Marvel Comics</title>
            </Helmet>

            <ComicsBanner />
            <Box w="100%" h="100vh" px="150px"></Box>
        </>
    );
}
