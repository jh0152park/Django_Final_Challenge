import { VStack } from "@chakra-ui/react";
import WhiteWord from "./WhiteWord";

export default function AboutMarvel() {
    return (
        <VStack h="100%" spacing="5px" ml="50px">
            <WhiteWord name="ABOUT MARVEL" bold={true} />
            <WhiteWord name="HELP/FAQS" bold={true} />
            <WhiteWord name="CAREERS" bold={true} />
            <WhiteWord name="INTERNSHIPS" bold={true} />
        </VStack>
    );
}
