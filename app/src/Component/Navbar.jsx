import { Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { Text } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Flex justifyContent="flex-end" gap={10} alignItems="center" p={5} backgroundColor="black" color="#c8102e" >
       <Link to='/'><Text>Home</Text></Link>
       <Link to='/gallery'><Text>Gallery</Text></Link>
       <Link to='/wish'><Text>Wish</Text></Link>
    </Flex>
  )
}

export default Navbar