import { Box, Heading } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import Banner from "../components/Banner";
import { useQuery } from "react-query";
import { listComics } from "../api";

export default function Comics() {
    const { isLoading, data } = useQuery(["comics"], listComics);
    const Comics = data?.data.results;

    console.log(Comics);

    return (
        <>
            <Helmet>
                <title>Marvel Comics</title>
            </Helmet>

            <Banner category="comics" />

            <Heading>COMICS</Heading>
        </>
    );
}
