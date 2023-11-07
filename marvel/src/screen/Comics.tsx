import { Box, Grid, Heading } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import { listComics } from "../api";
import ComicsBanner from "../components/ComicsBanner";
import Title from "./Comics/Title";
import Loading from "./Comics/Loading";
import { ComicsResponse } from "../types";
import Comic from "./Comics/Comic";

export default function Comics() {
    const loadingArray = Array.from({ length: 20 }, () => 0);
    const { isLoading, data } = useQuery<ComicsResponse>(
        ["comics"],
        listComics
    );
    const Comics = data?.data.results;

    // if (!isLoading && Comics) {
    //     const id = Comics[0].id;
    //     const title = Comics[0].title;
    //     const image = Comics[0].thumbnail.path;
    //     const type = Comics[0].thumbnail.extension;
    //     const thumbnail = `${image}.${type}`;
    //     const creator_number = Comics[0].creators.available;
    //     const creators = Comics[0].creators.items;
    //     const genre = Comics[0].format;

    //     console.log(id);
    //     console.log(title);
    //     console.log(thumbnail);
    //     console.log(genre);
    //     console.log(creators);
    // }

    return (
        <>
            <Helmet>
                <title>Marvel Comics</title>
            </Helmet>

            <ComicsBanner />
            <Box w="100%" px="350px" pt="100px">
                <Title />
                <Grid templateColumns="repeat(5, 1fr)" gap="20px">
                    {isLoading
                        ? loadingArray.map((dummy, index) => (
                              <Loading key={index} />
                          ))
                        : Comics?.map((comic) => (
                              <Comic
                                  key={comic.id}
                                  title={comic.title}
                                  creator={comic.creators.items}
                                  thumbnail={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                              />
                          ))}
                </Grid>
            </Box>
        </>
    );
}
