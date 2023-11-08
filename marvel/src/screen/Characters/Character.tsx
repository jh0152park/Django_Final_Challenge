import { Box, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { CharacterPhoto, CharacterThumbnail } from "../../ProjectCommon";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { go_to_top, updateCharacterThumbnail } from "../../util/util";

interface IProps {
    id: number;
    name: string;
    photo: string;
}

export default function Character({ id, name, photo }: IProps) {
    const navigate = useNavigate();
    const [isHover, setIsHover] = useState(false);

    const updatePhoto = updateCharacterThumbnail(name);
    if (updatePhoto && updatePhoto !== "none") {
        photo = updatePhoto;
    }

    function onCharacterClick() {
        go_to_top(0);
        navigate(`/characters/${id}`);
    }

    return (
        <Box
            w="200px"
            h="355px"
            bg="#111111"
            position="relative"
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onClick={onCharacterClick}
            _hover={{
                cursor: "pointer",
            }}
            overflow="hidden"
            boxSizing="border-box"
        >
            <Box
                w="100%"
                h={isHover ? "100%" : "210px"}
                bg="red.500"
                transition="all 0.2s linear"
            ></Box>

            <Box
                w="100%"
                h="205px"
                position="absolute"
                top="0"
                overflow="hidden"
                boxSizing="border-box"
            >
                <Image
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    src={photo}
                    transform={isHover ? "scale(1.1)" : "scale(1.0)"}
                    transition="all 0.2s linear"
                />
            </Box>
            <Box
                w="100%"
                h="140px"
                color="white"
                pl="20px"
                pt="10px"
                position="absolute"
                top="210px"
            >
                <Text
                    w="100%"
                    h="100%"
                    fontFamily="Roboto Condensed"
                    fontWeight="bold"
                    fontSize="20px"
                >
                    {name}
                </Text>
            </Box>
        </Box>
    );
}
