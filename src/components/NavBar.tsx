import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function NavBar({ isHomepage }: { isHomepage: boolean }) {

    if (isHomepage) {
        return (
            <Flex padding="32px" align="center" justify="center" height="20px">
                <Heading>LGBTQuery</Heading>
            </Flex>
        )
    }
    return (
        <Flex justify="space-between" padding="32px" align="center" height="20px">
            <Text><Link href="/">New Search</Link></Text>
            <Heading flexGrow={1} textAlign={"center"}>LGBTQuery</Heading>
            <Text><Link href="/">Contact</Link></Text>
        </Flex>
    )
}