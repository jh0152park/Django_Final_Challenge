import { Text } from "@chakra-ui/react";

interface IProps {
    name: string;
    hover?: boolean;
}

export default function DarkButton({ name, hover }: IProps) {
    return (
        <Text
            color="rgba(255,255,255,0.3)"
            fontSize="12px"
            _hover={{
                cursor: hover ? "pointer" : "auto",
                color: hover ? "rgba(255, 255, 255, 0.7)" : "",
            }}
        >
            {name}
        </Text>
    );
}
