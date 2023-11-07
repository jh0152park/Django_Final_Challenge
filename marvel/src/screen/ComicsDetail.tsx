import { useParams } from "react-router-dom";
import Background from "./Comics/Detail/Background";
import { Center } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { ComicDetailResponse } from "../types";
import { comicDetail } from "../api";

export default function ComicsDetail() {
    const { comicId } = useParams();
    const { isLoading, data } = useQuery<ComicDetailResponse>(
        ["comics", comicId],
        comicDetail
    );

    return (
        <Center w="100%" h="100vh" bg="rgba(0, 0, 0, 0.5)">
            {isLoading ? (
                <Background
                    url={
                        "https://cdn.marvel.com/content/1x/campaign_logo_16x9_legal_thumbnail.jpg"
                    }
                />
            ) : (
                <Background
                    url={
                        "https://cdn.marvel.com/content/1x/campaign_logo_16x9_legal_thumbnail.jpg"
                    }
                />
            )}
            {/* <Background url={thumbnale} /> */}
        </Center>
    );
}
