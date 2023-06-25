import { Flex, Heading, Image, Text } from "@chakra-ui/react"
import RepoCard from "./RepoCard"

export default function ReposDisplay({ repos }: { repos: Record<string, any>[] }) {
  return (
    <Flex
      height={"50vh"}
      flexWrap={"wrap"}
      m="8px"
      border={"1px solid rgba(1, 65, 255, 0.2)"}
      borderRadius={"8px"}
      width={"70%"}
      padding="32px"
      align="center"
      justify="center"
      className={"repo-box"}
    >
      {repos.map((repo: Record<string, any>) => (
        <RepoCard key={repo.name} repo={repo} />
      ))}
    </Flex>
  )
}
