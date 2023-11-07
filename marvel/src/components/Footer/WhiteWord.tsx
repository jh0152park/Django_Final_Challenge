import { Box, Text } from "@chakra-ui/react";

interface IProps {
    name: string;
    bold?: boolean;
}

export default function WhiteWord({ name, bold }: IProps) {
    return (
        <Box w="115px">
            <Text
                fontFamily="Roboto Condensed"
                fontSize="15px"
                fontWeight={bold ? "bold" : "normal"}
                color="rgba(255, 255, 255, 0.8)"
                _hover={{
                    cursor: "pointer",
                    color: "rgba(255, 255, 255, 0.5)",
                }}
            >
                {name}
            </Text>
        </Box>
    );
}
