import Head from "next/head"
import { Box, Button, Flex, Heading, Select, Text } from "@chakra-ui/react"
import Link from "next/link"
import UserCard from "@/components/UserCard"
import NavBar from "@/components/NavBar"

export default function Results({ facts }: { facts: Record<string, any>[] }) {
  return (
    <>
      <Head>
        <title>LGBTQuery: Search Results</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar isHomepage={false}/>
      <Flex padding={"32px"} height="80vh" justify="center" align="center">
        <UserCard /> 
        <UserCard />
        <UserCard />
        <UserCard />
      </Flex>
    </>
  )
}