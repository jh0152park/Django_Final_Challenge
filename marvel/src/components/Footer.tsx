import { Center, HStack, Image, VStack } from "@chakra-ui/react";
import DarkWord from "./Footer/DarkWord";
import AboutMarvel from "./Footer/AboutMarvel";
import Advertising from "./Footer/Advertising";
import CoCompany from "./Footer/CoCompany";

export default function Footer() {
    return (
        <Center w="100%" h="350px" bg="#181818">
            <VStack>
                <HStack h="120px">
                    <Image
                        w="80px"
                        h="100%"
                        objectFit="cover"
                        src={require("../resource/images/footer/marvel_logo.jpg")}
                    />
                    <AboutMarvel />
                    <Advertising />
                    <CoCompany />
                </HStack>
                <HStack spacing="20px" mt="100px">
                    <DarkWord name="Terms of Use" hover={true} />
                    <DarkWord name="Privacy Policy" hover={true} />
                    <DarkWord name="Interest-Based Ads" hover={true} />
                    <DarkWord name="License Agreement" hover={true} />
                    <DarkWord name="ⓒ2023 MARVEL" />
                </HStack>
            </VStack>
        </Center>
    );
}
