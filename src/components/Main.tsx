import { Slider } from '@mui/material'
import React from 'react'
import NavBar from './NavBar'
import WelcomeSlider from './WelcomeSlider'
import NavigateCategories from './NavigateCategories'
import Cart from './Cart'

const Main = () => {
  return (
    <div>
      <WelcomeSlider></WelcomeSlider>
      <NavigateCategories></NavigateCategories>
      <Cart></Cart>
    </div>
  )
}

export default Main