import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react"
import Link from "next/link"
import { useRouter } from "next/router"

export default function RepoCard({ repo }: { repo: Record<string, any> }) {
  const router = useRouter()

  const handleClick = async (owner: string, name: string) => {
    await router.push(`/results/${owner}_${name}`)
  }

  return (
    <Flex
      flexDir="column"
      align="center"
      justify="center"
      width="40%"
      height="50%"
      border={"1px solid white"}
      borderRadius={"8px"}
      padding={"32px"}
      m="16px"
      backgroundColor={"white"}
    >
      <Text>Name: {repo.name}</Text>
      <Text>
        <Link href={repo.html_url}>Repository</Link>
      </Text>
      <Text>Description: {repo.description}</Text>
      <Button
        backgroundColor={"rgba(109, 209, 178,0.4)"}
        className={"contribute-button"}
        onClick={() => handleClick(repo.owner, repo.name)}
      >
        See Contributors
      </Button>
      <Text>Owner: {repo.owner}</Text>
    </Flex>
  )
}
