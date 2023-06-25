import React, { useState } from "react"
import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react"
import Link from "next/link"
import { useRouter } from "next/router"

export default function RepoCard({ repo }: { repo: Record<string, any> }) {
  const router = useRouter()
  const [expand, setExpand] = useState(false)

  const handleClick = async (owner: string, name: string) => {
    await router.push(`/results/${owner}_${name}`)
  }

  const randomColor = Math.floor(Math.random() * 16777215).toString(16)

  return (
    <Flex
      flexDir="column"
      align="center"
      justify="center"
      width="40%"
      height={expand ? "60%" : "50%"}
      border={"1px solid white"}
      borderRadius={"8px"}
      padding={"32px"}
      m="16px"
      backgroundColor={"white"}
    >
      <div>
        <Text pb="4px" align={"center"} fontWeight={"800"} color={"#" + randomColor}>
          {repo.name}
        </Text>
        <Text pb="4px" align={"center"}>
          <Link href={repo.html_url} className={"repo-link"}>
            <u>Repository</u>
          </Link>
        </Text>
        <Text pb="4px" align={"center"}>
          {`Description: ${expand
            ? repo?.description || "None"
            : (repo?.description?.slice(0, 20) || "None") +
            (repo?.description?.length > 20 ? "..." : "")}`}
        </Text>
        {repo?.description?.length > 20 && (
          <Flex pb="4px" justify={"center"} align={"center"} cursor="pointer">
            <Text
              className={"expand-link"}
              color={"#" + randomColor}
              align={"center"}
              onClick={() => {
                setExpand(!expand)
              }}
            >
              {expand && repo?.description?.length > 20 ? "–" : "+"}
            </Text>
          </Flex>
        )}
      </div>
      <Button
        m="4px"
        padding={"8px 16px"}
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
