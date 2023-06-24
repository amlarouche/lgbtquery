import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function RepoCard({ repo }: { repo: Record<string, any> }) {
    const router = useRouter()

    const handleClick = async (owner: string, name: string) => {
        await router.push(`/results/${owner}_${name}`)
    }

    return (
        <Flex flexDir="column" align="center" justify="center" width="40%" border={"1px solid black"} borderRadius={"8px"} padding={"32px"} m="16px">
            <Text>Name: {repo.name}</Text>
            <Text><Link href={repo.html_url}>Repository</Link></Text>
            <Text>Description: {repo.description}</Text>
            <Button onClick={() => handleClick(repo.owner, repo.name)}>See Contributors</Button>
            <Text>Owner: {repo.owner}</Text>
        </Flex>
    )
}