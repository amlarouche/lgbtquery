import { Button, Flex, Heading, Image, Text, useRadio } from "@chakra-ui/react"
import Link from "next/link"

export default function UserCard({ user, isCreator = false }: { user: Record<string, any>, isCreator?: boolean }) {
  const fillerText = isCreator ? "Other projects:" : "Contributions to repository:"
  return (
    <Flex
      flexDir="column"
      align="center"
      justify="center"
      height="60%"
      width="40%"
      backgroundColor={"rgba(255, 255, 255, 0.7)"}
      border={"1px solid white"}
      borderRadius={"8px"}
      padding={"32px"}
      m="16px"
    >
      <Image src={user.avatar} alt={`${user.login}'s profile photo`} maxH={"100px"} />
      <Heading>{user.login}</Heading>
      <Text>{`${fillerText} ${user.contributions}`}</Text>
      <Button backgroundColor={"rgba(109, 209, 178,0.4)"}>
        <Link href={user.html_url}>Profile</Link>
      </Button>
    </Flex>
  )
}
