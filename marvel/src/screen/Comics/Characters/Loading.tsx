import {
    Center,
    Skeleton,
    SkeletonCircle,
    SkeletonText,
    VStack,
} from "@chakra-ui/react";

export default function Loading() {
    return (
        <Center>
            <VStack>
                <SkeletonCircle size="100px" />
                <SkeletonText
                    my="10px"
                    w="150px"
                    skeletonHeight="30px"
                    noOfLines={1}
                />
                <Skeleton w="150px" h="70px" />
            </VStack>
        </Center>
    );
}
