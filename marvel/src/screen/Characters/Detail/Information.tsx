import {
    Box,
    Center,
    HStack,
    Heading,
    Image,
    Skeleton,
    SkeletonCircle,
    Text,
    VStack,
    keyframes,
} from "@chakra-ui/react";
import { MyButton } from "../../Comics/Detail/Information";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

interface IProps {
    name: string;
    photo: string;
    description: string;
    comics: number;
    series: number;
    stories: number;
    isLoading: boolean;
}

const spin = keyframes`
    100% {
        transform: rotateY(360deg);
    }
`;

export default function Information({
    name,
    photo,
    description,
    comics,
    series,
    stories,
    isLoading,
}: IProps) {
    const navigate = useNavigate();
    const spinAnimation = `${spin} 5s linear infinite`;

    function onGoBackClick() {
        navigate(-1);
    }

    function onComicsClick() {
        navigate("/comics");
    }

    return (
        <>
            <Helmet>
                <title>{!isLoading ? "Marvel Characters" : `${name}`}</title>
            </Helmet>
            <Center w="100%" h="150px" my="20px">
                <VStack w="100%">
                    <Skeleton w="700px" height="60px" isLoaded={isLoading}>
                        <Center w="100%" color="white">
                            <Heading
                                fontFamily="Roboto Condensed"
                                fontSize="40px"
                            >
                                {name}
                            </Heading>
                        </Center>
                    </Skeleton>
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
                <SkeletonCircle size="300px" isLoaded={isLoading}>
                    <Box
                        w="300px"
                        h="300px"
                        _hover={{
                            cursor: "pointer",
                        }}
                        animation={spinAnimation}
                    >
                        <Image
                            w="100%"
                            h="100%"
                            objectFit="cover"
                            src={photo}
                            borderRadius="50%"
                        />
                    </Box>
                </SkeletonCircle>
                <Skeleton mt="20px" w="700px" h="150px" isLoaded={isLoading}>
                    <Center
                        w="100%"
                        h="100%"
                        boxSizing="border-box"
                        color="white"
                    >
                        <Text
                            fontFamily="Roboto Condensed"
                            fontSize="20px"
                            noOfLines={3}
                        >
                            {description ? description : "-"}
                        </Text>
                    </Center>
                </Skeleton>
                <Skeleton mt="20px" w="700px" h="90px" isLoaded={isLoading}>
                    <HStack
                        w="100%"
                        h="100%"
                        color="white"
                        fontFamily="Roboto Condensed"
                        justifyContent="space-between"
                        fontSize="20px"
                    >
                        <Center>
                            <VStack>
                                <Text fontWeight="bold">
                                    Comics that appeared
                                </Text>
                                <Text>{comics}</Text>
                            </VStack>
                        </Center>
                        <Center>
                            <VStack>
                                <Text fontWeight="bold">
                                    Series that appeared
                                </Text>
                                <Text>{series}</Text>
                            </VStack>
                        </Center>
                        <Center>
                            <VStack>
                                <Text fontWeight="bold">
                                    Stories that appeared
                                </Text>
                                <Text>{stories}</Text>
                            </VStack>
                        </Center>
                    </HStack>
                </Skeleton>
            </VStack>
        </>
    );
}
