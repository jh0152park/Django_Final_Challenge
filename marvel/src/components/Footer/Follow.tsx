import { Grid, GridItem, Icon, Text, VStack } from "@chakra-ui/react";
import {
    FaFacebookSquare,
    FaPinterest,
    FaSnapchatGhost,
    FaTumblr,
    FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ImInstagram } from "react-icons/im";

export default function Follow() {
    return (
        <VStack alignItems="flex=start" ml="70px" mt="20px">
            <Text
                fontFamily="Roboto Condensed"
                fontSize="15px"
                fontWeight="bold"
                color="rgba(255, 255, 255, 0.8)"
            >
                FOLLOW MARVEL
            </Text>
            <Grid templateColumns="repeat(4, 1fr)" mt="10px">
                <GridItem mb="15px" mr="25px">
                    <Icon
                        as={FaFacebookSquare}
                        color="rgba(255, 255, 255, 0.3)"
                        w="20px"
                        h="20px"
                        _hover={{
                            cursor: "pointer",
                            color: "rgba(255, 255, 255, 0.8)",
                            transition: "all 0.2s linear",
                        }}
                    />
                </GridItem>
                <GridItem>
                    <Icon
                        as={FaXTwitter}
                        color="rgba(255, 255, 255, 0.3)"
                        w="20px"
                        h="20px"
                        _hover={{
                            cursor: "pointer",
                            color: "rgba(255, 255, 255, 0.8)",
                            transition: "all 0.2s linear",
                        }}
                    />
                </GridItem>
                <GridItem>
                    <Icon
                        as={ImInstagram}
                        color="rgba(255, 255, 255, 0.3)"
                        w="20px"
                        h="20px"
                        _hover={{
                            cursor: "pointer",
                            color: "rgba(255, 255, 255, 0.8)",
                            transition: "all 0.2s linear",
                        }}
                    />
                </GridItem>
                <GridItem>
                    <Icon
                        as={FaTumblr}
                        color="rgba(255, 255, 255, 0.3)"
                        w="20px"
                        h="20px"
                        _hover={{
                            cursor: "pointer",
                            color: "rgba(255, 255, 255, 0.8)",
                            transition: "all 0.2s linear",
                        }}
                    />
                </GridItem>
                <GridItem>
                    <Icon
                        as={FaYoutube}
                        color="rgba(255, 255, 255, 0.3)"
                        w="20px"
                        h="20px"
                        _hover={{
                            cursor: "pointer",
                            color: "rgba(255, 255, 255, 0.8)",
                            transition: "all 0.2s linear",
                        }}
                    />
                </GridItem>
                <GridItem>
                    <Icon
                        as={FaSnapchatGhost}
                        color="rgba(255, 255, 255, 0.3)"
                        w="20px"
                        h="20px"
                        _hover={{
                            cursor: "pointer",
                            color: "rgba(255, 255, 255, 0.8)",
                            transition: "all 0.2s linear",
                        }}
                    />
                </GridItem>
                <GridItem>
                    <Icon
                        as={FaPinterest}
                        color="rgba(255, 255, 255, 0.3)"
                        w="20px"
                        h="20px"
                        _hover={{
                            cursor: "pointer",
                            color: "rgba(255, 255, 255, 0.8)",
                            transition: "all 0.2s linear",
                        }}
                    />
                </GridItem>
            </Grid>
        </VStack>
    );
}
