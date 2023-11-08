import { useParams } from "react-router-dom";
import Background from "./Comics/Detail/Background";
import { useQuery } from "react-query";
import { characterDetail } from "../api";
import { CharacterDetailResponse } from "../types";
import { updateCharacterThumbnail } from "../util/util";
import { Box } from "@chakra-ui/react";
import Information from "./Characters/Detail/Information";

export default function CharactersDetail() {
    const { characterId } = useParams();
    const { isLoading, data } = useQuery<CharacterDetailResponse>(
        ["character", characterId],
        characterDetail
    );
    const name = data?.data.results[0].name;
    const description = data?.data.results[0].description;
    let photo = `${data?.data.results[0].thumbnail.path}.${data?.data.results[0].thumbnail.extension}`;

    if (name) {
        const updatePhoto = updateCharacterThumbnail(name);
        if (updatePhoto && updatePhoto !== "none") {
            photo = updatePhoto;
        }
    }

    return (
        <>
            <Box w="100%" h="100vh" position="relative">
                <Background
                    url={
                        isLoading
                            ? require("../resource/images/loading.jpg")
                            : photo
                    }
                />
                <Box w="100%" h="100vh" position="absolute" top="0">
                    <Information />
                </Box>
            </Box>
        </>
    );
}
