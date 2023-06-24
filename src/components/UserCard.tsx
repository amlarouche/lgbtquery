import { Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function UserCard() {
    return (
        <Flex flexDir="column" align="center" justify="center" height="70%" width="40%" border={"1px solid black"} borderRadius={"8px"} padding={"32px"} m="16px">
            <Image src="cool" alt={`user's profile photo`} />
            <Heading>User name</Heading>
            <Text>Other crap</Text>
            <Text>Repository</Text>
        </Flex>
    )
}