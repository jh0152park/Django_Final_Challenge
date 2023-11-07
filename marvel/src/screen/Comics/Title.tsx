import { Box, Heading } from "@chakra-ui/react";

export default function Title() {
    return (
        <Box position="relative" mb="100px">
            <Box w="80px" h="3px" bg="gold" transform="rotateZ(-35deg)" />
            <Heading
                fontFamily="Roboto Condensed"
                fontSize="30px"
                zIndex="99"
                position="absolute"
                top="-15px"
                left="10px"
            >
                BEST SELLING DIGITAL COMICS
            </Heading>
        </Box>
    );
}
