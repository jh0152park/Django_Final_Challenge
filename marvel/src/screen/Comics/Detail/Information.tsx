import {
    Box,
    HStack,
    Image,
    Skeleton,
    SkeletonText,
    VStack,
} from "@chakra-ui/react";

interface IProps {
    title: string;
    thumbnail: string;
    isLoading: boolean;
}

export default function Information({ title, thumbnail, isLoading }: IProps) {
    return (
        <HStack
            position="absolute"
            w="100%"
            h="100%"
            px="400px"
            pt="50px"
            alignItems="flex-start"
        >
            <Skeleton minW="350px" minH="540px" isLoaded={isLoading} top="50px">
                <Box w="100%" h="100%">
                    <Image
                        w="100%"
                        h="100%"
                        objectFit="cover"
                        src={thumbnail}
                    />
                </Box>
            </Skeleton>

            <VStack w="100%" h="100%" alignItems="flex-start" ml="70px">
                <SkeletonText
                    w="200px"
                    skeletonHeight="30px"
                    isLoaded={isLoading}
                    noOfLines={1}
                ></SkeletonText>
                <SkeletonText
                    mt="20px"
                    w="200px"
                    skeletonHeight="30px"
                    isLoaded={isLoading}
                    noOfLines={2}
                ></SkeletonText>
                <SkeletonText
                    mt="20px"
                    w="600px"
                    skeletonHeight="30px"
                    isLoaded={isLoading}
                    noOfLines={2}
                ></SkeletonText>
                <SkeletonText
                    mt="20px"
                    w="200px"
                    skeletonHeight="30px"
                    isLoaded={isLoading}
                    noOfLines={2}
                ></SkeletonText>
                <SkeletonText
                    mt="20px"
                    w="600px"
                    skeletonHeight="150px"
                    isLoaded={isLoading}
                    noOfLines={1}
                ></SkeletonText>
            </VStack>
        </HStack>
    );
}
