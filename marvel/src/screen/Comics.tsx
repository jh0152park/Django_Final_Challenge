import { Box, Grid, Heading } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import { listComics } from "../api";
import ComicsBanner from "../components/ComicsBanner";
import Title from "./Comics/Title";
import Loading from "./Comics/Loading";

export default function Comics() {
    const loadingArray = Array.from({ length: 20 }, () => 0);
    const { isLoading, data } = useQuery(["comics"], listComics);
    const Comics = data?.data.results;

    console.log(Comics);

    return (
        <>
            <Helmet>
                <title>Marvel Comics</title>
            </Helmet>

            <ComicsBanner />
            <Box w="100%" px="350px" pt="100px">
                <Title />
                <Grid templateColumns="repeat(5, 1fr)" gap="20px">
                    {/* <Box
                        w="100%"
                        h="350px"
                        bg="blue"
                        mb="20px"
                        boxShadow="0 2px 2px rgba(0,0,0,0.15), 
                        0 8px 8px rgba(0,0,0,0.15), 
                        0 15px 15px rgba(0,0,0,0.15), 
                        0 20px 20px rgba(0,0,0,0.15)"
                    /> */}
                    {loadingArray.map((dummy) => (
                        <Loading key={dummy} />
                    ))}
                </Grid>
            </Box>
        </>
    );
}
