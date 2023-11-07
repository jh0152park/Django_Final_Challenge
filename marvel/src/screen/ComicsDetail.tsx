import { useParams } from "react-router-dom";
import Background from "./Comics/Detail/Background";
import { Center } from "@chakra-ui/react";

export default function ComicsDetail() {
    const { comicsId } = useParams();

    return (
        <Center w="100%" h="90vh">
            {/* <Background url={thumbnale} /> */}
        </Center>
    );
}
