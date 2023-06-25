import { Flex, Heading, Image, Text } from "@chakra-ui/react"
import Link from "next/link"

export default function NavBar({ isHomepage }: { isHomepage: boolean }) {
  const newSearch = (
    <Text>
      <Link href="/">New Search</Link>
    </Text>
  )
  const contact = (
    <Text>
      <Link href="/">Contact</Link>
    </Text>
  )
  return (
    <Flex
      className="header"
      padding="32px"
      align="center"
      justify="center"
      height="20px"
      fontSize="80px"
    >
      {isHomepage ? newSearch : null}
      <Heading fontSize="60px" fontFamily={"'Caprasimo', cursive"}>
        LGBTQuery
      </Heading>
      {isHomepage ? contact : null}
    </Flex>
  )
}
