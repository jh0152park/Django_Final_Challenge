import { Box, Image } from "@chakra-ui/react";

export default function Background() {
    const defaultBackground =
        "https://cdn.marvel.com/content/1x/marvel-brick-inline-article-image_1.png";
    return <Box w="100%" h="100%" filter="auto" blur="5px"></Box>;
}
