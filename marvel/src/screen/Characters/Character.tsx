import { Box, Image, Text } from "@chakra-ui/react";
import { useState } from "react";

interface IProps {
    name: string;
    photo: string;
}

export default function Character({ name, photo }: IProps) {
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

            <Box w="100%" h="205px" position="absolute" top="0">
                <Image w="100%" h="100%" objectFit="cover" src={photo} />
            </Box>
            <Box
                w="100%"
                h="140px"
                color="white"
                pl="20px"
                pt="10px"
                position="absolute"
                top="210px"
            >
                <Text
                    w="100%"
                    h="100%"
                    fontFamily="Roboto Condensed"
                    fontWeight="bold"
                    fontSize="20px"
                >
                    {name}
                </Text>
            </Box>
        </Box>
    );
}
