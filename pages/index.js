import React from 'react'
import { Box, Text, Flex, Grid, Image, Link } from "@chakra-ui/react"
import ProductSimple from '../components/card'
import Pricing from '../components/payment'

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
        // bg='red.200'
        border='1px' borderColor='gray.200'
        display="grid" gridGap={2} gridAutoFlow="row dense"
        w="100%" h="300px" bgGradient="radial(gray.300, gray.400, gray.200)"
      >
        <Text
          ml="25px"
          bgGradient="linear(to-l, #00A3C4, #065666)"
          bgClip="text"
          // fontSize="6xl"
          // fontSize="md"
          fontSize={64}
          fontWeight="extrabold"
          textAlign={['left', 'center']}
        // textShadow='1px 1px #ff0000' m='6'
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
      <Box>
        <Box p={4} display={{ md: 'flex' }}>
          <Box flexShrink={0}>
            <Image
              borderRadius='lg'
              width={{ md: 40 }}
              src='https://bit.ly/2jYM25F'
              alt='Woman paying for a purchase'
            />
          </Box>
          <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
            <Text
              fontWeight='bold'
              textTransform='uppercase'
              fontSize='sm'
              letterSpacing='wide'
              color='teal.600'
            >
              Marketing
            </Text>
            <Link
              mt={1}
              display='block'
              fontSize='lg'
              lineHeight='normal'
              fontWeight='semibold'
              href='#'
            >
              Finding customers for your new business
            </Link>
            <Text mt={2} color='gray.500'>
              Getting a new business off the ground is a lot of hard work. Here are five
              ideas you can use to find your first customers.
            </Text>
          </Box>
        </Box>
      </Box>
      <Box p={4} display={{ md: 'flex' }}>
        <ProductSimple />
      </Box>
      <Box p={4} display={{ md: 'flex' }}>
        <Pricing />
      </Box>

    </Flex>
  )



}

