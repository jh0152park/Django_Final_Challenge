import { Box, Image } from "@chakra-ui/react";

export default function Background({ url }: { url: string }) {
    console.log(`bg url: ${url}`);
    return (
        <Box w="100%" h="100%" filter="auto" blur="5px" background={url}></Box>
    );
}
