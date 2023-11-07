import { Box, Skeleton, SkeletonText, VStack } from "@chakra-ui/react";

export default function Loading() {
    return (
        <>
            <Box mb="55px">
                <Skeleton
                    w="240px"
                    h="350px"
                    startColor="black"
                    endColor="white"
                    mb="40px"
                />
                <SkeletonText startColor="black" endColor="white" />
            </Box>
        </>
    );
}
