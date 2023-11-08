import { useRecoilValue } from "recoil";
import { ComicThumbnail } from "../ProjectCommon";
import { Helmet } from "react-helmet";
import Background from "./Comics/Detail/Background";

export default function ComicCharacters() {
    const thumbnail = useRecoilValue(ComicThumbnail);

    return (
        <>
            <Helmet>
                <title>Characters</title>
            </Helmet>
            <Background url={thumbnail} />
        </>
    );
}
