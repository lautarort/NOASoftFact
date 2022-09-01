import React from 'react'
import { Box, Text, Flex, Grid } from "@chakra-ui/react"

export default function index() {
  return (
    // <Box maxW="960px" mx="auto" color='grey.500' bg='tomato'
    // <Box w="100%" h="200px" bgGradient="linear(to-t, green.200, pink.500)"
    <Box
      // display="flex" alignItems="center"
      // align="flex" justify="center"
      border='1px' borderColor='gray.200'
      display="grid" gridGap={2} gridAutoFlow="row dense"
      w="100%" h="300px" bgGradient="radial(gray.300, yellow.400, pink.200)"
    >
      <Text ml="25px"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        // fontSize="6xl"
        // fontSize="md"
        fontSize={64}
        fontWeight="extrabold"
        textAlign={['left', 'center']}
      >
        NOASofFact
      </Text>
      <Text ml="25px"
        // bgGradient="linear(to-l, #7928CA, #FF0080)"
        // color='grey.500'
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        // fontSize="6xl"
        // fontSize="md"
        fontSize={64}
        fontWeight="extrabold"
        textAlign={['left']}
      >
        join
      </Text>
    </Box >
  )
}
