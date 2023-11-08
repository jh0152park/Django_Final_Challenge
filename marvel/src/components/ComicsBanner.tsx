import { Box, Center, Heading, Image, Text, VStack } from "@chakra-ui/react";
import styled from "styled-components";
import { DeviceStatus } from "../ProjectCommon";
import { useRecoilState } from "recoil";

const ReadBox = styled.div`
    width: 150px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-weight: bold;
    background: linear-gradient(
                -45deg,
                transparent 15px,
                rgba(255, 255, 255, 0.7) 0
            )
            right,
        linear-gradient(135deg, transparent 15px, rgba(255, 255, 255, 0.7) 0)
            left;
    background-size: 50% 100%;
    background-repeat: no-repeat;
    &:hover {
        cursor: pointer;
        background: linear-gradient(-45deg, transparent 15px, white 0) right,
            linear-gradient(135deg, transparent 15px, white 0) left;
        background-size: 50% 100%;
        background-repeat: no-repeat;
    }
`;

export default function ComicsBanner() {
    const LokiURL =
        "https://www.marvel.com/articles/comics/read-loki-agent-of-asgard-infinity-comic-series-for-free";
    const bannerImage = require("../resource/images/comics_banner.jpg");

    const [deviceStatus, setDeviceStatus] = useRecoilState(DeviceStatus);

    return (
        <Box w="100%" h="570px" bgColor="#111111" position="relative">
            <Image w="100%" h="100%" objectFit="cover" src={bannerImage} />

            <Box
                w="100%"
                h="100%"
                position="absolute"
                top="0"
                bgColor="rgba(0, 0, 0, 0.7)"
                px={deviceStatus === "Mobile" ? "20px" : "350px"}
                pt="150px"
            >
                <VStack
                    color="white"
                    spacing="20px"
                    alignItems="flex-start"
                    fontFamily="Roboto Condensed"
                >
                    <Text fontWeight="bold" fontSize="20px">
                        MARVEL'S INFINITY COMICS
                    </Text>
                    <Heading mt="20px" fontFamily="Roboto Condensed">
                        'LOKI: AGENT OF ASGARD' SERIES
                    </Heading>
                    <Heading mt="-25px" fontFamily="Roboto Condensed">
                        FREE ON MARVEL UNLIMITED
                    </Heading>
                    <ReadBox
                        onClick={() => {
                            window.open(LokiURL, "_blank", "noopener");
                        }}
                    >
                        READ NOW!
                    </ReadBox>
                </VStack>
            </Box>
        </Box>
    );
}
