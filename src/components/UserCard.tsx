import { Button, Flex, Heading, Image, Text, useRadio } from "@chakra-ui/react";
import Link from "next/link";

export default function UserCard({ user }: { user: Record<string, any> }) {
    return (
        <Flex flexDir="column" align="center" justify="center" height="70%" width="40%" border={"1px solid black"} borderRadius={"8px"} padding={"32px"} m="16px">
            <Image src={user.avatar} alt={`user's profile photo`} maxH={"100px"} />
            <Heading>{user.login}</Heading>
            <Text>Other projects: {user.contributions}</Text>
            <Button><Link href={user.html_url}>Profile</Link></Button>
        </Flex>
    )
}