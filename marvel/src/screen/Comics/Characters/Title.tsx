import { Center, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { MyButton } from "../Detail/Information";
import { useNavigate } from "react-router-dom";

interface IProps {
    noOfCharacter: number;
}

export default function Title({ noOfCharacter }: IProps) {
    const navigate = useNavigate();

    function onGoBackClick() {
        navigate(-1);
    }

    function onComicsClick() {
        navigate("/comics");
    }

    return (
        <Center w="100%" h="150px" mb="15px">
            <VStack w="100%">
                <Heading
                    color="white"
                    fontFamily="Roboto Condensed"
                    fontSize="40px"
                >
                    {noOfCharacter < 0
                        ? "CHARACTERS"
                        : noOfCharacter === 0
                        ? "0 CHARACTER"
                        : `${noOfCharacter} CHARACTERS`}
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
