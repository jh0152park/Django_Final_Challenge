import { Box, Grid, Heading } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import { listComics } from "../api";
import ComicsBanner from "../components/ComicsBanner";
import Title from "./Comics/Title";
import Loading from "./Comics/Loading";
import { ComicsResponse } from "../types";
import Comic from "./Comics/Comic";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { ComicsThumbnail } from "../ProjectCommon";

export default function Comics() {
    const loadingArray = Array.from({ length: 20 }, () => 0);
    const { isLoading, data } = useQuery<ComicsResponse>(
        ["comics"],
        listComics
    );
    const Comics = data?.data.results;
    const setComicsThumbnails = useSetRecoilState(ComicsThumbnail);

    if (Comics) {
        let db = [];
        for (var i = 0; i < Comics.length; i++) {
            db.push({
                id: Comics[i].id,
                thumbnail: `${Comics[i].thumbnail.path}.${Comics[i].thumbnail.extension}`,
            });
        }
        // console.log(db);
        setComicsThumbnails(db);
    }

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
                                  id={comic.id}
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
