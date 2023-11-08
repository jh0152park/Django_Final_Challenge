import { Center, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { MyButton } from "../Detail/Information";
import { useNavigate } from "react-router-dom";

export default function Title() {
    const navigate = useNavigate();

    function onGoBackClick() {
        navigate(-1);
    }

    function onComicsClick() {
        navigate("/comics");
    }

    return (
        <Center w="100%" h="150px">
            <VStack w="100%">
                <Heading
                    color="white"
                    fontFamily="Roboto Condensed"
                    fontSize="40px"
                >
                    CHARACTERS
                </Heading>
                <HStack>
                    <MyButton onClick={onGoBackClick}>
                        <Text mt="5px">GO BACK</Text>
                    </MyButton>
                    <MyButton onClick={onComicsClick}>
                        <Text mt="5px">COMICS</Text>
                    </MyButton>
                </HStack>
            </VStack>
        </Center>
    );
}
