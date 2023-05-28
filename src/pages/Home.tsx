import React from 'react'

import NavBar from '../components/NavBar'
import WelcomeSlider from '../components/WelcomeSlider'
import NavigateCategories from '../components/NavigateCategories'
import Cart from '../components/Cart'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <NavBar/>
    <WelcomeSlider></WelcomeSlider>
    <NavigateCategories></NavigateCategories>
    <Cart></Cart>
    <Footer></Footer>
    </>
  )
}

export default Home