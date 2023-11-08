import {
    Box,
    HStack,
    Image,
    Skeleton,
    SkeletonText,
    Text,
    VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

interface IProps {
    title: string;
    genre: string;
    published: string;
    thumbnail: string;
    description: string;
    isLoading: boolean;
    writer: string;
    penciler: string;
    artist: string;
}

const MyButton = styled.div`
    width: 150px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(255, 255, 255, 0.5);
    font-weight: bold;
    font-family: "Roboto Condense";
    background: linear-gradient(-45deg, transparent 15px, #f56565 0) right,
        linear-gradient(135deg, transparent 15px, #f56565 0) left;
    background-size: 50% 100%;
    background-repeat: no-repeat;
    transition: all 0.2s linear;
    &:hover {
        color: white;
        cursor: pointer;
        background: linear-gradient(-45deg, transparent 15px, #e53e3e 0) right,
            linear-gradient(135deg, transparent 15px, #e53e3e 0) left;
        background-size: 50% 100%;
        background-repeat: no-repeat;
    }
`;

export default function Information({
    title,
    genre,
    published,
    description,
    thumbnail,
    writer,
    penciler,
    artist,
    isLoading,
}: IProps) {
    const navigate = useNavigate();

    function onGoBackClick() {
        navigate(-1);
    }

    return (
        <HStack
            position="absolute"
            w="100%"
            h="100%"
            px="400px"
            pt="150px"
            alignItems="flex-start"
        >
            <VStack>
                <Skeleton
                    minW="350px"
                    minH="540px"
                    maxW="350px"
                    maxH="540px"
                    isLoaded={isLoading}
                    top="50px"
                >
                    <Box minW="350px" minH="540px" maxW="350px" maxH="540px">
                        <Image
                            minW="350px"
                            minH="540px"
                            maxW="350px"
                            maxH="540px"
                            objectFit="cover"
                            src={thumbnail}
                        />
                    </Box>
                </Skeleton>

                <HStack>
                    <MyButton onClick={onGoBackClick}>
                        <Text mt="5px">GO BACK</Text>
                    </MyButton>
                    <MyButton>
                        <Text mt="5px">CHARACTERS</Text>
                    </MyButton>
                </HStack>
            </VStack>

            <VStack w="100%" h="100%" alignItems="flex-start" ml="50px">
                <SkeletonText
                    w="200px"
                    skeletonHeight="30px"
                    isLoaded={isLoading}
                    noOfLines={1}
                >
                    <Text
                        w="650px"
                        fontFamily="Roboto Condensed"
                        color="white"
                        fontWeight="bold"
                        fontSize="30px"
                    >
                        {title}
                    </Text>
                </SkeletonText>
                <SkeletonText
                    mt="20px"
                    w="200px"
                    skeletonHeight="30px"
                    isLoaded={isLoading}
                    noOfLines={2}
                >
                    <VStack alignItems="flex-start" spacing="0">
                        <Text
                            fontFamily="Roboto Condensed"
                            color="white"
                            fontWeight="bold"
                            fontSize="25px"
                        >
                            Published:
                        </Text>
                        <Text
                            fontFamily="Roboto Condensed"
                            color="white"
                            fontSize="20px"
                        >
                            {published}
                        </Text>
                    </VStack>
                </SkeletonText>
                <SkeletonText
                    mt="20px"
                    w="600px"
                    skeletonHeight="30px"
                    isLoaded={isLoading}
                    noOfLines={2}
                >
                    <HStack w="100%" justifyContent="space-between">
                        <VStack alignItems="flex-start" spacing="0">
                            <Text
                                fontFamily="Roboto Condensed"
                                color="white"
                                fontWeight="bold"
                                fontSize="25px"
                            >
                                Writer:
                            </Text>
                            <Text
                                fontFamily="Roboto Condensed"
                                color="white"
                                fontSize="20px"
                            >
                                {writer}
                            </Text>
                        </VStack>
                        <VStack alignItems="flex-start" spacing="0">
                            <Text
                                fontFamily="Roboto Condensed"
                                color="white"
                                fontWeight="bold"
                                fontSize="25px"
                            >
                                Penciler:
                            </Text>
                            <Text
                                fontFamily="Roboto Condensed"
                                color="white"
                                fontSize="20px"
                            >
                                {penciler}
                            </Text>
                        </VStack>
                    </HStack>
                </SkeletonText>
                <SkeletonText
                    mt="20px"
                    w="200px"
                    skeletonHeight="30px"
                    isLoaded={isLoading}
                    noOfLines={2}
                >
                    <VStack alignItems="flex-start" spacing="0">
                        <Text
                            fontFamily="Roboto Condensed"
                            color="white"
                            fontWeight="bold"
                            fontSize="25px"
                        >
                            Cover Artist:
                        </Text>
                        <Text
                            fontFamily="Roboto Condensed"
                            color="white"
                            fontSize="20px"
                        >
                            {artist}
                        </Text>
                    </VStack>
                </SkeletonText>
                <SkeletonText
                    mt="20px"
                    w="600px"
                    skeletonHeight="150px"
                    isLoaded={isLoading}
                    noOfLines={1}
                >
                    <Box w="600px">
                        <Text
                            fontFamily="Roboto Condensed"
                            color="white"
                            fontSize="20px"
                            noOfLines={5}
                        >
                            {description}
                        </Text>
                    </Box>
                </SkeletonText>
            </VStack>
        </HStack>
    );
}
