import Head from "next/head"
import {Flex } from "@chakra-ui/react"
import NavBar from "@/components/NavBar"
import axios from "axios"
import UserCard from "@/components/UserCard"


export default function Contact({ returnedContributors }: { returnedContributors: Record<string, any>[] }) {

    return (
        <>
            <Head>
                <title>LGBTQuery</title>
            </Head>
            <NavBar isHomepage={true} />
            <Flex
                flexDir="column"
                justify="center"
                align="center"
                className="main-container"
            >
                <Flex flexWrap={"wrap"} padding={"32px"} height="80vh" justify="center" align="center">
                    {returnedContributors.map((user: Record<string, any>) => (
                        <UserCard key={user.login} user={user} />
                    ))}
                </Flex>
            </Flex>
        </>
    )
}


export async function getStaticProps() {
    const contributors = [] as Record<string, any>[]

    const aUrl = 'https://api.github.com/users/amlarouche'
    const eUrl = 'https://api.github.com/users/emmychu'
    const cUrl = 'https://api.github.com/users/chrishicks430'

    const responseA = await axios.get(aUrl)
    const responseE = await axios.get(eUrl)
    const responseC = await axios.get(cUrl)

    // Process the response
    contributors.push(responseA.data, responseE.data, responseC.data)
console.log(contributors)
    const returnedContributors = contributors.map((item: any) => ({
        login: item.login,
        avatar: item.avatar_url,
        contributions: item.public_repos,
        html_url: item.html_url,
    }))

    return {
        props: {
            returnedContributors,
        },
    }
}