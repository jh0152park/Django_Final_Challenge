import { Box, Center, Image, Text, VStack } from "@chakra-ui/react";

interface IProps {
    name: string;
    photo: string;
    description: string;
}

export default function Character({ name, photo, description }: IProps) {
    return (
        <Center>
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
