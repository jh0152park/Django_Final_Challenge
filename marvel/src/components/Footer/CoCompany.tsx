import { Center, HStack, Image, Text, VStack } from "@chakra-ui/react";

export default function CoCompany() {
    return (
        <VStack>
            <HStack _hover={{ cursor: "pointer" }}>
                <Center w="60px" mr="25px" ml="80px">
                    <Image
                        w="100%"
                        objectFit="cover"
                        src={require("../../resource/images/footer/marvel_insider.jpg")}
                    />
                </Center>
                <VStack spacing="0" alignItems="flex-start">
                    <Text
                        fontFamily="Roboto Condensed"
                        fontWeight="bold"
                        color="rgba(255, 255, 255, 0.8)"
                    >
                        MARVEL INSIDER
                    </Text>
                    <Text
                        fontSize="13px"
                        mt="-5px"
                        color="rgba(255, 255, 255, 0.3)"
                    >
                        Get Rewarded for Being a Marvel Fan
                    </Text>
                </VStack>
            </HStack>

            <HStack mt="10px" _hover={{ cursor: "pointer" }}>
                <Center w="60px" mr="25px" ml="80px">
                    <Image
                        w="100%"
                        objectFit="cover"
                        src={require("../../resource/images/footer/marvel_unlimited.jpg")}
                    />
                </Center>
                <VStack spacing="0" alignItems="flex-start">
                    <Text
                        fontFamily="Roboto Condensed"
                        fontWeight="bold"
                        color="rgba(255, 255, 255, 0.8)"
                    >
                        MARVEL UNLIMITED
                    </Text>
                    <Text
                        fontSize="13px"
                        mt="-5px"
                        color="rgba(255, 255, 255, 0.3)"
                    >
                        Access Over 30,000+ Digital Comics
                    </Text>
                </VStack>
            </HStack>
        </VStack>
    );
}
