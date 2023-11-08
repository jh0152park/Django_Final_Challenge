import { Box } from "@chakra-ui/react";
import { useState } from "react";

export default function Character() {
    const [isHover, setIsHover] = useState(false);

    return (
        <Box
            w="200px"
            h="355px"
            bg="#111111"
            position="relative"
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            _hover={{
                cursor: "pointer",
            }}
        >
            <Box
                w="100%"
                h={isHover ? "100%" : "210px"}
                bg="red.500"
                transition="all 0.2s linear"
            ></Box>
            <Box
                w="100%"
                h="205px"
                position="absolute"
                top="0"
                bg="purple.200"
            ></Box>
        </Box>
    );
}
