import {
    Center,
    HStack,
    Skeleton,
    SkeletonCircle,
    Text,
    VStack,
} from "@chakra-ui/react";
import { MyButton } from "../../Comics/Detail/Information";
import { useNavigate } from "react-router-dom";

export default function Information() {
    const navigate = useNavigate();

    function onGoBackClick() {
        navigate(-1);
    }

    function onComicsClick() {
        navigate("/comics");
    }

    return (
        <>
            <Center w="100%" h="150px" mb="15px">
                <VStack w="100%">
                    <Skeleton w="400px" height="60px" />
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

            <VStack mt="50px">
                <SkeletonCircle size="300px"></SkeletonCircle>
                <Skeleton mt="20px" w="700px" h="150px"></Skeleton>
                <Skeleton mt="20px" w="700px" h="90px"></Skeleton>
            </VStack>
        </>
    );
}
