import React, { FC } from "react"
import { Box, Button, Flex, Heading, Input, Select, Text } from "@chakra-ui/react"

type QuestionBoxType = {
  setLanguageSearchTerm: (str: string) => void
  setProjectSearchTerm: (str: string) => void
}

const QuestionBox: FC<QuestionBoxType> = ({ setLanguageSearchTerm, setProjectSearchTerm }) => {
  return (
    <Box margin={"32px"}>
      <Flex mt={"8px"}>
        <Text minWidth="128px">Project Type:</Text>
        <Input
          onChange={(e) => setProjectSearchTerm(e.target.value)}
          placeholder={"Enter a project idea..."}
        />
      </Flex>
      <Flex mt={"8px"}>
        <Text minWidth="128px">Language:</Text>
        <Select
          onChange={(e) => setLanguageSearchTerm(e.target.value)}
          minWidth="256px"
          placeholder="Select a language"
        >
          <option value="Javascript">Javascript</option>
          <option value="Python">Python</option>
        </Select>
      </Flex>
    </Box>
  )
}

export default QuestionBox
