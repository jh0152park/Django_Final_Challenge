import { Box, Center, Heading, Image, Text, VStack } from "@chakra-ui/react";

export default function CharactersBanner() {
    const bannerImage = require("../resource/images/characters_banner.jpg");

    return (
        <Box w="100%" h="450px" bgColor="#111111" position="relative">
            <Image w="100%" h="100%" objectFit="cover" src={bannerImage} />

            <Center
                w="100%"
                h="100%"
                position="absolute"
                top="0"
                bgColor="rgba(0, 0, 0, 0.7)"
            >
                <VStack color="white" spacing="20px">
                    <Heading fontSize="45px" fontFamily="Roboto Condensed">
                        MARVEL CHARACTERS
                    </Heading>
                    <Text fontSize="18px" fontFamily="Roboto Condensed">
                        Get hooked on a hearty helping of heroes and villains
                        from the humble House of Ideas!
                    </Text>
                </VStack>
            </Center>
        </Box>
    );
}
