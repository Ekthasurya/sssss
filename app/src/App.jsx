import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Wish from './Page/Wish'
import Home from './Page/Home'
import Gallery from './Page/Gallery'
import Navbar from './Component/Navbar'
import Fotter from './Component/Fotter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/gallery' element={<Gallery/>} />
      <Route path='/wish' element={<Wish/>} />
     </Routes>
    <Fotter/>
    </>
  )
}

export default App
