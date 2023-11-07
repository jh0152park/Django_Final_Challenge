import { Box, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { updateThumbnail } from "../../util/util";

interface ICreator {
    resourceURI: string;
    name: string;
    role?: string;
}

interface IPorps {
    title: string;
    thumbnail: string;
    creator: ICreator[];
}

export default function Comic({ title, thumbnail, creator }: IPorps) {
    let newThumbnail = "";
    const [isHover, setIsHover] = useState(false);

    newThumbnail = updateThumbnail(title);
    if (newThumbnail !== "none") thumbnail = newThumbnail;

    function toggleIsHover() {
        setIsHover((prev) => !prev);
    }

    return (
        <Box
            mb="20px"
            w="240px"
            onMouseOver={toggleIsHover}
            onMouseLeave={toggleIsHover}
            _hover={{
                cursor: "pointer",
            }}
        >
            <Box
                w="240px"
                h="350px"
                mb="35px"
                boxShadow="0 5px 15px rgba(0,0,0,0.5)"
                transform={isHover ? "translate(0, -10px)" : ""}
                transition="all 0.15s linear"
            >
                <Image w="100%" h="100%" objectFit="cover" src={thumbnail} />
            </Box>
            <Text
                w="100%"
                fontSize="15px"
                fontWeight="bold"
                fontFamily="Roboto Condensed"
                color={isHover ? "red.500" : "black"}
            >
                {title}
            </Text>
        </Box>
    );
}
