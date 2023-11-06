import { Box, Center, HStack, Heading, Image, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { Helmet } from "react-helmet";

const SCREEN_HEIGHT = window.innerHeight;

export default function Intro() {
    const [isHover, setIsHover] = useState(false);

    function toggleHover() {
        setIsHover((prev) => !prev);
    }

    return (
        <>
            <Helmet>
                <title>Marvel Universe</title>
            </Helmet>
            <Box w="100%" h="100vh" position="relative">
                <Image
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    src={require("../resource/images/welcome.jpg")}
                />

                <Center w="100%" h="100%" position="absolute" top="0" left="0">
                    <VStack spacing="30px" zIndex="99">
                        <Heading fontFamily="Bungee Spice" fontSize="70px">
                            LET'S EXPLORE
                        </Heading>
                        <Heading fontFamily="Bungee Spice" fontSize="70px">
                            MARVEL COMICS UNIVERSE
                        </Heading>
                        <Heading fontFamily="Bungee Spice" fontSize="70px">
                            IF YOU READY,
                        </Heading>
                        <Heading fontFamily="Bungee Spice" fontSize="70px">
                            SAY
                        </Heading>
                        <Heading
                            fontFamily="Bungee Spice"
                            fontSize="70px"
                            _hover={{
                                cursor: "pointer",
                            }}
                            onMouseOver={toggleHover}
                            onMouseLeave={toggleHover}
                        >
                            HEIMDALL OPEN THE BIFROST !!
                        </Heading>
                    </VStack>

                    <HStack
                        position="absolute"
                        bottom={SCREEN_HEIGHT}
                        spacing={0}
                        opacity={isHover ? 1 : 0}
                        transition={"all 0.5s linear"}
                        transform={
                            isHover ? `translateY(${SCREEN_HEIGHT}px)` : ""
                        }
                    >
                        <Box
                            w="50px"
                            h="100vh"
                            background="linear-gradient(to right, white, red, orange, yellow, green, blue, indigo, purple, white)"
                        ></Box>
                        <Box
                            w="50px"
                            h="100vh"
                            background="linear-gradient(to right, white, red, orange, yellow, green, blue, indigo, purple, white)"
                        ></Box>
                        <Box
                            w="50px"
                            h="100vh"
                            background="linear-gradient(to right, white, red, orange, yellow, green, blue, indigo, purple, white)"
                        ></Box>
                    </HStack>
                </Center>
            </Box>
        </>
    );
}
