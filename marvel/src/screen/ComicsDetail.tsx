import { useParams } from "react-router-dom";
import Background from "./Comics/Detail/Background";
import { Center } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { ComicDetailResponse } from "../types";
import { comicDetail } from "../api";
import Information from "./Comics/Detail/Information";
import { updateThumbnail } from "../util/util";
import { Helmet } from "react-helmet";

export default function ComicsDetail() {
    const { comicId } = useParams();
    const { isLoading, data } = useQuery<ComicDetailResponse>(
        ["comics", comicId],
        comicDetail
    );

    let title = "";
    let thumbnail = "";
    let newThumbnail = "";

    if (!isLoading && data) {
        title = data.data.results[0].title;
        thumbnail = `${data.data.results[0].thumbnail.path}.${data.data.results[0].thumbnail.extension}`;
        newThumbnail = updateThumbnail(title);
        if (newThumbnail !== "none") thumbnail = newThumbnail;
    }

    return (
        <>
            <Helmet>
                <title>{isLoading ? "Marvel Comics" : title}</title>
            </Helmet>
            <Center
                w="100%"
                h="100vh"
                bg="rgba(0, 0, 0, 0.5)"
                position="relative"
            >
                {isLoading ? (
                    <Background
                        url={
                            "https://cdn.marvel.com/content/1x/campaign_logo_16x9_legal_thumbnail.jpg"
                        }
                    />
                ) : (
                    <Background url={thumbnail} />
                )}
                <Information
                    title={title}
                    thumbnail={thumbnail}
                    isLoading={!isLoading}
                />
            </Center>
        </>
    );
}
