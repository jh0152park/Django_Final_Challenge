import { useRecoilValue } from "recoil";
import { ComicThumbnail } from "../ProjectCommon";
import { Helmet } from "react-helmet";
import Background from "./Comics/Detail/Background";
import { Box, Center, Grid, Heading } from "@chakra-ui/react";
import Title from "./Comics/Characters/Title";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { listComicCharacters } from "../api";
import { CharactersResponse } from "../types";
import Loading from "./Comics/Characters/Loading";

export default function ComicCharacters() {
    const { comicId } = useParams();
    const thumbnail = useRecoilValue(ComicThumbnail);
    const loadingArray = Array.from({ length: 21 }, () => 0);
    const { isLoading, data } = useQuery<CharactersResponse>(
        ["comicCharacters", comicId],
        listComicCharacters
    );
    const noOfCharacter = data?.data.total as -1;

    // console.log(noOfCharacter);

    return (
        <>
            <Helmet>
                <title>Characters</title>
            </Helmet>
            <Center w="100%" bg="rgba(0, 0, 0, 0.5)" position="relative">
                <Background url={thumbnail} />
                <Box w="100%" h="100%" position="absolute" top="0" px="100px">
                    <Title noOfCharacter={isLoading ? -1 : noOfCharacter} />
                    <Grid templateColumns="repeat(7, 1fr)" rowGap="20px">
                        {isLoading
                            ? loadingArray.map((dummy, index) => (
                                  <Loading key={index} />
                              ))
                            : null}
                    </Grid>
                </Box>
            </Center>
        </>
    );
}
