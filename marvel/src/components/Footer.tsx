import { Center, HStack, VStack } from "@chakra-ui/react";
import DarkButton from "./Footer/DarkButton";

export default function Footer() {
    return (
        <Center w="100%" h="350px" bg="#181818">
            <VStack>
                <HStack></HStack>
                <HStack spacing="20px">
                    <DarkButton name="Terms of Use" hover={true} />
                    <DarkButton name="Privacy Policy" hover={true} />
                    <DarkButton name="Interest-Based Ads" hover={true} />
                    <DarkButton name="License Agreement" hover={true} />
                    <DarkButton name="ⓒ2023 MARVEL" />
                </HStack>
            </VStack>
        </Center>
    );
}
