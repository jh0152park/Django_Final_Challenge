import { Box, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { CharacterPhoto } from "../../ProjectCommon";

interface IProps {
    name: string;
    photo: string;
}

export default function Character({ name, photo }: IProps) {
    const [isHover, setIsHover] = useState(false);

    if (Object.keys(CharacterPhoto).includes(name)) {
        if (name === "Aaron Stack") photo = CharacterPhoto["Aaron Stack"];
        else if (name === "Abomination (Ultimate)")
            photo = CharacterPhoto["Abomination (Ultimate)"];
        else if (name === "Adam Destine")
            photo = CharacterPhoto["Adam Destine"];
        else if (name === "Aero (Aero)") photo = CharacterPhoto["Aero (Aero)"];
        else if (name === "Agent X (Nijo)")
            photo = CharacterPhoto["Agent X (Nijo)"];
        else if (name === "Aginar") photo = CharacterPhoto["Aginar"];
        else if (name === "Air-Walker (Gabriel Lan)")
            photo = CharacterPhoto["Air-Walker (Gabriel Lan)"];
    }

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
            overflow="hidden"
            boxSizing="border-box"
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
                overflow="hidden"
                boxSizing="border-box"
            >
                <Image
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    src={photo}
                    transform={isHover ? "scale(1.1)" : "scale(1.0)"}
                    transition="all 0.2s linear"
                />
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
