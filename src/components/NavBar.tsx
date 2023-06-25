import { Flex, Heading, Image, Text } from "@chakra-ui/react"
import Link from "next/link"

export default function NavBar({ isHomepage }: { isHomepage: boolean }) {
  const newSearch = (
    <Text className="nav-link" fontSize="20px">
      <Link href="/">New Search</Link>
    </Text>
  )
  const contact = (
    <Text fontSize="20px" className="nav-link">
      <Link href="/">Contact</Link>
    </Text>
  )

  const randomColor = Math.floor(Math.random() * 16777215).toString(16)
  return (
    <Flex
      className="header"
      padding="32px"
      align="center"
      justify={isHomepage ? "center" : "space-between"}
      height="20px"
      fontSize="80px"
    >
      {!isHomepage ? newSearch : null}
      <Heading color={"#" + randomColor} fontSize="60px" fontFamily={"'Caprasimo', cursive"}>
        LGBTQuery
      </Heading>
      {!isHomepage ? contact : null}
    </Flex>
  )
}
