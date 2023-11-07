import { Box, Flex, Image } from "@chakra-ui/react";

export default function Background({ url }: { url: string }) {
    const outerBoxStyles = {
        w: "100%",
        h: "100vh",
        background: `url(${url}) center/cover no-repeat`,
    };

    const innerBoxStyles = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        boxSize: "full",
        color: "white",
        textShadow: "0 0 20px black",
        fontWeight: "bold",
        fontSize: "20px",
        background: "rgba(0, 0, 0, 0.5)",
    };

    return (
        <Box sx={outerBoxStyles}>
            <Box
                sx={innerBoxStyles}
                backdropFilter="auto"
                backdropBlur="10px"
            ></Box>
        </Box>
    );
}
