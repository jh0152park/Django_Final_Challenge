import { Center, HStack, Image, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { go_to_top } from "../util/util";

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    const LOGO =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/220px-Marvel_Logo.svg.png";
    const [currentTab, setCurrentTab] = useState("COMICS");

    function onComicsClick() {
        setCurrentTab("COMICS");
        go_to_top(0);
        if (location.pathname !== "/comics") navigate("/comics");
    }

    function onCharactersClick() {
        setCurrentTab("CHARACTERS");
        go_to_top(0);
        if (location.pathname !== "/characters") navigate("/characters");
    }

    console.log(location.pathname);

    return (
        <Center w="100%" h="100px" bg="#181818">
            <VStack w="100%" h="100%" spacing="0">
                <Center
                    w="100%"
                    h="50%"
                    border="1px solid"
                    borderTop="none"
                    borderColor="rgba(255, 255, 255, 0.1)"
                >
                    <Image
                        w="130px"
                        h="100%"
                        objectFit="cover"
                        src={LOGO}
                        _hover={{ cursor: "pointer" }}
                        onClick={onComicsClick}
                    />
                </Center>
                <Center w="100%" h="50%">
                    <HStack
                        h="100%"
                        fontWeight="bold"
                        fontSize="11px"
                        spacing="30px"
                    >
                        <Center
                            _hover={{ cursor: "pointer" }}
                            onClick={onComicsClick}
                            color={currentTab === "COMICS" ? "white" : "gray"}
                        >
                            COMICS
                        </Center>
                        <Center
                            _hover={{ cursor: "pointer" }}
                            onClick={onCharactersClick}
                            color={
                                currentTab === "CHARACTERS" ? "white" : "gray"
                            }
                        >
                            CHARACTERS
                        </Center>
                    </HStack>
                </Center>
            </VStack>
        </Center>
    );
}
