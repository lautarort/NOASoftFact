import React from 'react'
import { Box, Text, Flex, Grid } from "@chakra-ui/react"

export default function index() {
  const outerBoxStyles = {
    boxSize: '250px',
    p: '10',
    background:
      'url(https://picsum.photos/id/1068/200/300) center/cover no-repeat',
  }

  const innerBoxStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    boxSize: 'full',
    color: 'white',
    textShadow: '0 0 20px black',
    fontWeight: 'bold',
    fontSize: '20px',
  }
  return (

    <Flex flexWrap='wrap' gap='24px' justifyContent='space-evenly'>
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
          textShadow='1px 1px #ff0000' m='6'
        >
          NOASofFact
        </Text>
      </Box >
      {/* adding backdrop-filter property to the element */}
      <Box sx={outerBoxStyles}>
        <Box sx={innerBoxStyles} backdropFilter='invert(100%)'>
          Box with Backdrop Filter
        </Box>
      </Box>
      {/* adding backdrop-blur property to the element */}
      <Box sx={outerBoxStyles}>
        <Box sx={innerBoxStyles} backdropFilter='auto' backdropBlur='8px'>
          Box with Backdrop Blur
        </Box>
      </Box>
      {/* adding backdrop-contrast property to the element */}
      <Box sx={outerBoxStyles}>
        <Box sx={innerBoxStyles} backdropFilter='auto' backdropContrast='30%'>
          Box with Backdrop Contrast
        </Box>
      </Box>
    </Flex>
  )



}

