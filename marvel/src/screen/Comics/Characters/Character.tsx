import { Box, Center, Image, Text, VStack } from "@chakra-ui/react";
import { ComicCharactersPhoto } from "../../../ProjectCommon";

interface IProps {
    name: string;
    photo: string;
    description: string;
}

export default function Character({ name, photo, description }: IProps) {
    if (Object.keys(ComicCharactersPhoto).includes(name)) {
        if (name === "Colossus (Ultimate)")
            photo = ComicCharactersPhoto["Colossus (Ultimate)"];
        else if (name === "Holocaust (Age of Apocalypse)")
            photo = ComicCharactersPhoto["Holocaust (Age of Apocalypse)"];
        else if (name === "Vanisher (Ultimate)")
            photo = ComicCharactersPhoto["Vanisher (Ultimate)"];
    }

    return (
        <Center
            _hover={{
                cursor: "pointer",
                transform: "scale(1.2)",
            }}
            transition="all 0.2s linear"
        >
            <VStack>
                <Box w="100px" h="100px">
                    <Image
                        w="100%"
                        h="100%"
                        objectFit="cover"
                        src={photo}
                        borderRadius="50%"
                    />
                </Box>
                <Center my="10px" w="200px" h="40px" color="white">
                    <Text
                        fontFamily="Roboto Condensed"
                        fontWeight="bold"
                        fontSize="14px"
                    >
                        {name}
                    </Text>
                </Center>
                <Center w="200px" h="70px" overflow="hidden" color="white">
                    <Text
                        noOfLines={3}
                        fontFamily="Roboto Condensed"
                        fontWeight="bold"
                        fontSize="14px"
                    >
                        {description ? description : "-"}
                    </Text>
                </Center>
            </VStack>
        </Center>
    );
}
