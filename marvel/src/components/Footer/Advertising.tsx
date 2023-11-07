import { VStack } from "@chakra-ui/react";
import WhiteWord from "./WhiteWord";

export default function Advertising() {
    return (
        <VStack h="100%" spacing="5px" ml="70px">
            <WhiteWord name="ADVERTISING" />
            <WhiteWord name="DISNEY+" />
            <WhiteWord name="MARVELHQ.COM" />
            <WhiteWord name="REDEEM DIGITAL COMICS" />
        </VStack>
    );
}
