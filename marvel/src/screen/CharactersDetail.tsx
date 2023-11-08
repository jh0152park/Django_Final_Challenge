import { useParams } from "react-router-dom";
import Background from "./Comics/Detail/Background";

export default function CharactersDetail() {
    const { CharacterId } = useParams();

    return (
        <>
            <Background url={require("../resource/images/loading.jpg")} />
        </>
    );
}
