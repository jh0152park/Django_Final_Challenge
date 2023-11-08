import { Box, Image, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { go_to_top, joinCreator, updateThumbnail } from "../../util/util";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { DeviceStatus } from "../../ProjectCommon";

interface ICreator {
    resourceURI: string;
    name: string;
    role?: string;
}

interface IPorps {
    id: number;
    title: string;
    thumbnail: string;
    creator: ICreator[];
}

export default function Comic({ id, title, thumbnail, creator }: IPorps) {
    let newThumbnail = "";
    let writer = joinCreator(creator);

    const navigate = useNavigate();
    const [isHover, setIsHover] = useState(false);
    const [deviceStatus, setDeviceStatus] = useRecoilState(DeviceStatus);

    newThumbnail = updateThumbnail(title);
    if (newThumbnail !== "none") thumbnail = newThumbnail;

    function onComicsClick() {
        go_to_top(0);
        navigate(`/comics/${id}`);
    }

    return (
        <Box
            w={
                deviceStatus === "Web"
                    ? "240px"
                    : deviceStatus === "Tablet"
                    ? "180px"
                    : "350px"
            }
            mb="20px"
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            _hover={{
                cursor: "pointer",
            }}
            onClick={onComicsClick}
        >
            <Box
                w="100%"
                h={
                    deviceStatus === "Web"
                        ? "350px"
                        : deviceStatus === "Tablet"
                        ? "290px"
                        : "550px"
                }
                mb="35px"
                boxShadow="0 5px 15px rgba(0,0,0,0.5)"
                transform={isHover ? "translate(0, -10px)" : ""}
                transition="all 0.15s linear"
            >
                <Image w="100%" h="100%" objectFit="cover" src={thumbnail} />
            </Box>
            <Text
                w="100%"
                fontSize={deviceStatus === "Mobile" ? "20px" : "15px"}
                fontWeight="bold"
                fontFamily="Roboto Condensed"
                color={isHover ? "red.500" : "black"}
            >
                {title}
            </Text>

            <Text
                fontFamily="Roboto Condensed"
                fontSize="12px"
                noOfLines={1}
                w="100%"
                _hover={{
                    color: "red.500",
                }}
                mt="5px"
            >
                {writer}
            </Text>
        </Box>
    );
}
