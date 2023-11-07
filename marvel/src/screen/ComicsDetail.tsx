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
    const COMIC_DETAIL = data?.data.results[0];

    let title = "";
    let genre = "";
    let thumbnail = "";
    let description = "";
    let newThumbnail = "";
    let published = "November 08, 2023";
    let writers: any = [];
    let pencilers: any = [];
    let artists: any = [];

    if (!isLoading && COMIC_DETAIL) {
        title = COMIC_DETAIL.title;
        genre = COMIC_DETAIL.format || "Comic";
        description = COMIC_DETAIL.textObjects.length
            ? COMIC_DETAIL.textObjects[0].text
            : "-";
        thumbnail = `${COMIC_DETAIL.thumbnail.path}.${COMIC_DETAIL.thumbnail.extension}`;
        writers =
            COMIC_DETAIL.creators.items.find((item) => item.role === "writer")
                ?.name || "-";
        pencilers =
            COMIC_DETAIL.creators.items.find(
                (item) => item.role === "penciller"
            )?.name || "-";
        artists =
            COMIC_DETAIL.creators.items.find(
                (item) => item.role === "penciller (cover)"
            )?.name || "-";

        console.log(`writers: ${writers}`);

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
                    genre={genre}
                    published={published}
                    thumbnail={thumbnail}
                    isLoading={!isLoading}
                    description={description}
                    artist={artists}
                    writer={writers}
                    penciler={pencilers}
                />
            </Center>
        </>
    );
}
