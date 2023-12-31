import { Center, HStack, Image, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { go_to_top } from "../util/util";
import { useSetRecoilState } from "recoil";
import { DeviceStatus } from "../ProjectCommon";

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    const LOGO =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/220px-Marvel_Logo.svg.png";
    const [currentTab, setCurrentTab] = useState("COMICS");
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    const setDeviceStatus = useSetRecoilState(DeviceStatus);

    useEffect(() => {
        const resizeListener = () => {
            setInnerWidth(window.innerWidth);
        };
        window.addEventListener("resize", resizeListener);
        if (innerWidth < 500) {
            setDeviceStatus("Mobile");
        } else if (innerWidth > 1025) {
            setDeviceStatus("Web");
        } else {
            setDeviceStatus("Tablet");
        }
    });

    console.log("innerWidth", innerWidth);
    // 500 1024

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

    useEffect(() => {
        setCurrentTab(
            location.pathname.split("/")[1] === "comics"
                ? "COMICS"
                : "CHARACTERS"
        );
    }, [location.pathname]);

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
                        fontSize="12px"
                        spacing="30px"
                    >
                        <Center
                            h="100%"
                            _hover={{
                                cursor: "pointer",
                                borderBottom: "3px solid red",
                            }}
                            onClick={onComicsClick}
                            color={currentTab === "COMICS" ? "white" : "gray"}
                            borderBottom="3px solid #181818"
                            fontFamily="Roboto Condensed"
                        >
                            COMICS
                        </Center>
                        <Center
                            h="100%"
                            _hover={{
                                cursor: "pointer",
                                borderBottom: "3px solid red",
                            }}
                            onClick={onCharactersClick}
                            color={
                                currentTab === "CHARACTERS" ? "white" : "gray"
                            }
                            borderBottom="3px solid #181818"
                            fontFamily="Roboto Condensed"
                        >
                            CHARACTERS
                        </Center>
                    </HStack>
                </Center>
            </VStack>
        </Center>
    );
}
