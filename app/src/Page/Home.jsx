import { Box } from '@chakra-ui/react'
import React from 'react'
import { Text } from '@chakra-ui/react'
import '../App.css'
import { Image } from '@chakra-ui/react'

const Home = () => {
  return (
    <div className='body'>
     <div className='container'>
      <div className='card'>
        <div className='outside'>
      
        <h1>Happy Birthday</h1>
        <h3>My dear Tamasa,may god bless you with abundant joy on your birthday and always!<br />
        Thank you for always being by my side and having my back.</h3>
        </div>
       
      </div>
      <div className='block'>
        <div className='frames frame1'>
          <img src="/public/Image/pic_4.jpg" alt="2" />
          <p>Keep smiling,Keep shining</p>
        </div>
        <div className='frames frame2'>
          <img src="/public/Image/pic_10.jpg" alt="" />
          <p>On this occasion bring you lot of happiness and success</p>
        </div>
        <div className='frames frame3'>
          <img src="/public/Image/pic_19.jpg" alt="" />
          <p>May God bless you on your birthday, and always</p>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Home