import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { Image } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import { color } from 'framer-motion'

const Gallery = () => {
  return (
    <Box>
    <Flex justifyContent="space-between" alignItems="center" backgroundColor="black" gap={{base:"50px",sm:"3px",lg:"30px",md:"15px"}}>
    <Box p={{base:"20px",sm:"10px",lg:"20px",md:"15px"}} className='img-dp'>
     <Image
  borderRadius='full'
  boxSize={{base:"200px",sm:"75px",lg:"200px",md:"100px"}}
  src='/public/Image/dp.jpg.jpg'
  alt='Dan Abramov'
/>
<Text textAlign="center" fontWeight={800} color="white">Tamasa saha</Text>
<Text textAlign="center" color="white">" 만지다 "</Text>
</Box>
<Box p={{base:"20px",sm:"10px",lg:"20px",md:"15px"}}>
    <Text fontWeight={800} color="white">HAPPY</Text>
    <Text color="white">শুভ</Text>
</Box>
<Box p={{base:"20px",sm:"10px",lg:"20px",md:"15px"}}>
<Text fontWeight={800} color="white" >BIRTH Day</Text>
<Text color="white">জন্মদিন</Text>
</Box>
<Box p={{base:"20px",sm:"10px",lg:"20px",md:"15px"}}>
<Text fontWeight={800} color="white">MIMI</Text>
<Text color="white">মিমি</Text>
</Box>
</Flex>

<Grid templateColumns={{base:"repeat(3, 1fr)",sm:"repeat(1, 1fr)",lg:"repeat(3, 1fr)",md:"repeat(2, 1fr)"}} p={5} gap={3} backgroundColor="black">
<GridItem p={5} >
<Box boxSize='sm' >
  <Image w={400} h={400} src='/public/Image/Pic1.jpg' alt='Dan Abramov' />
</Box>
  </GridItem>
  <GridItem p={5}>
<Box boxSize='sm'>
  <Image w={400} h={400} src='/public/Image/Pic_2.jpg' alt='Dan Abramov' />
</Box>
  </GridItem>
  <GridItem  p={5} >
<Box boxSize='sm' >
  <Image w={400} h={400} src='/public/Image/Pic_3.jpg' alt='Dan Abramov' />
</Box>
  </GridItem>
  <GridItem  p={5} >
<Box boxSize='sm'>
  <Image w={400} h={400} src='/public/Image/Pic_4.jpg' alt='Dan Abramov' />
</Box>
  </GridItem>
  <GridItem  p={5} >
<Box boxSize='sm'>
  <Image w={400} h={400} src='/public/Image/Pic_5.jpg' alt='Dan Abramov' />
</Box>
  </GridItem>
  <GridItem   p={5}>
<Box boxSize='sm'>
  <Image w={400} h={400} src='/public/Image/Pic_6.jpg' alt='Dan Abramov' />
</Box>
  </GridItem>
  <GridItem  p={5} >
<Box boxSize='sm'>
  <Image w={400} h={400} src='/public/Image/Pic_7.jpg' alt='Dan Abramov' />
</Box>
  </GridItem>
  <GridItem  p={5}>
<Box boxSize='sm'>
  <Image w={400} h={400} src='/public/Image/Pic_8.jpg' alt='Dan Abramov' />
</Box>
  </GridItem>
  <GridItem  p={5}>
<Box boxSize='sm'>
  <Image w={400} h={400} src='/public/Image/Pic_9.jpg' alt='Dan Abramov' />
</Box>
  </GridItem>
  <GridItem  p={5}>
<Box boxSize='sm'>
  <Image w={400} h={400} src='/public/Image/Pic_10.jpg' alt='Dan Abramov' />
</Box>
  </GridItem>
  <GridItem  p={5}>
<Box boxSize='sm'>
  <Image w={400} h={400} src='/public/Image/Pic_11.jpg' alt='Dan Abramov' />
</Box>
  </GridItem>
  <GridItem  p={5}>
<Box boxSize='sm'>
  <Image w={400} h={400} src='/public/Image/Pic_12.jpg' alt='Dan Abramov' />
</Box>
  </GridItem>
  <GridItem  p={5} >
<Box boxSize='sm'>
  <Image w={400} h={400} src='/public/Image/Pic_13.jpg' alt='Dan Abramov' />
</Box>
  </GridItem>
  <GridItem  p={5}>
<Box boxSize='sm'>
  <Image w={400} h={400} src='/public/Image/Pic_14.jpg' alt='Dan Abramov' />
</Box>
  </GridItem>
  <GridItem  p={5}>
<Box boxSize='sm'>
  <Image w={400} h={400} src='/public/Image/Pic_15.jpg' alt='Dan Abramov' />
</Box>
  </GridItem>
  <GridItem  p={5}>
<Box boxSize='sm'>
  <Image w={400} h={400} src='/public/Image/Pic_16.jpg' alt='Dan Abramov' />
</Box>
  </GridItem>
  <GridItem  p={5}>
<Box boxSize='sm'>
  <Image w={400} h={400} src='/public/Image/Pic_17.jpg' alt='Dan Abramov' />
</Box>
  </GridItem>
  <GridItem  p={5}>
<Box boxSize='sm'>
  <Image w={400} h={400} src='/public/Image/Pic_18.jpg' alt='Dan Abramov' />
</Box>
  </GridItem>
  <GridItem  p={5}>
<Box boxSize='sm'>
  <Image w={400} h={400} src='/public/Image/Pic_19.jpg' alt='Dan Abramov' />
</Box>
  </GridItem>
  <GridItem  p={5}>
<Box boxSize='sm'>
  <Image w={400} h={400} src='/public/Image/Pic_20.jpg' alt='Dan Abramov' />
</Box>
  </GridItem>
  <GridItem  p={5}>
<Box boxSize='sm'>
  <Image w={400} h={400} src='/public/Image/Pic_21.jpg' alt='Dan Abramov' />
</Box>
  </GridItem>
  <GridItem  p={5}>
<Box boxSize='sm'>
  <Image w={400} h={400} src='/public/Image/Pic_22.jpg' alt='Dan Abramov' />
</Box>
  </GridItem>
  <GridItem  p={5}>
<Box boxSize='sm'>
  <Image w={400} h={400} src='/public/Image/Pic_23.jpg' alt='Dan Abramov' />
</Box>
  </GridItem>
  <GridItem  p={5}>
<Box boxSize='sm'>
  <Image w={400} h={400} src='/public/Image/Pic_24.jpg' alt='Dan Abramov' />
</Box>
  </GridItem>
  <GridItem  p={5}>
<Box boxSize='sm'>
  <Image w={400} h={400} src='/public/Image/Pic_25.jpg' alt='Dan Abramov' />
</Box>
  </GridItem>
  <GridItem  p={5}>
<Box boxSize='sm'>
  <Image w={400} h={400} src='/public/Image/Pic_26.jpg' alt='Dan Abramov' />
</Box>
  </GridItem>
  <GridItem  p={5}>
<Box boxSize='sm'>
  <Image w={400} h={400} src='/public/Image/Pic_27.jpg' alt='Dan Abramov' />
</Box>
  </GridItem>
</Grid>
</Box>
  )
}

export default Gallery