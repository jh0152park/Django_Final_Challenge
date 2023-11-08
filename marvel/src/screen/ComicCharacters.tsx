import { useRecoilValue } from "recoil";
import { ComicThumbnail } from "../ProjectCommon";
import { Helmet } from "react-helmet";
import Background from "./Comics/Detail/Background";
import { Box, Center, Heading } from "@chakra-ui/react";
import Title from "./Comics/Characters/Title";

export default function ComicCharacters() {
    const thumbnail = useRecoilValue(ComicThumbnail);

    return (
        <>
            <Helmet>
                <title>Characters</title>
            </Helmet>
            <Center
                w="100%"
                h="100vh"
                bg="rgba(0, 0, 0, 0.5)"
                position="relative"
            >
                <Background url={thumbnail} />
                <Box w="100%" h="100%" position="absolute" top="0">
                    <Title noOfCharacter={-1} />
                </Box>
            </Center>
        </>
    );
}
