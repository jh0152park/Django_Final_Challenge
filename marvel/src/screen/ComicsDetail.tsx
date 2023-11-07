import { useParams } from "react-router-dom";

export default function ComicsDetail() {
    const { comicsId } = useParams();

    console.log(comicsId);

    return <h1>DETAIL</h1>;
}
