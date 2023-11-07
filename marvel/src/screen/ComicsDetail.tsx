import { useParams } from "react-router-dom";
import Background from "./Comics/Detail/Background";
import { Center } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { ComicsThumbnail } from "../ProjectCommon";

export default function ComicsDetail() {
    let thumbnale = "";
    const { comicsId } = useParams();
    const setComicsThumbnails = useRecoilValue<any>(ComicsThumbnail);

    for (var i of setComicsThumbnails) {
        if (i.id === Number(comicsId)) {
            thumbnale = i.thumbnale;
            break;
        }
    }
    // console.log(setComicsThumbnails);

    return (
        <Center w="100%" h="90vh">
            <Background />
        </Center>
    );
}
