import { Center, Heading, Image, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <Center w="100%" h="100vh">
            <Image
                w="100%"
                h="100%"
                objectFit="cover"
                src={require("../resource/images/notfound.jpg")}
            />

            <Center position="absolute" top="0" left="0" w="100%" h="100%">
                <VStack>
                    <Heading
                        fontFamily="Bungee Spice"
                        fontSize="70px"
                        fontWeight="bold"
                    >
                        🔥Page not found🔥
                    </Heading>
                    <Heading
                        fontFamily="Bungee Spice"
                        fontSize="90px"
                        fontWeight="bold"
                    >
                        You are lost
                    </Heading>
                    <Heading
                        fontFamily="Bungee Spice"
                        fontSize="90px"
                        fontWeight="bold"
                        _hover={{
                            cursor: "pointer",
                            transform: "scale(130%)",
                        }}
                        transition={"all 0.2s linear"}
                        onClick={() => {
                            navigate("/");
                        }}
                    >
                        Go HOME
                    </Heading>
                </VStack>
            </Center>
        </Center>
    );
}
