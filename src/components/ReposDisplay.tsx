import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import RepoCard from "./RepoCard";

export default function ReposDisplay({ repos }: { repos: Record<string, any>[] }) {
    return (
        <Flex maxHeight={"50vh"} overflow={"scroll"} flexWrap={"wrap"} m="8px" border={"1px solid black"} borderRadius={"8px"} width={"70%"} padding="32px" align="center" justify="center">
            {repos.map((repo: Record<string, any>) => <RepoCard key={repo.name} repo={repo} />)}
        </Flex>
    )
}