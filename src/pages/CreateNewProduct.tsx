import React from 'react'

import CreateProduct from '../components/CreateProduct'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export const CreateNewProduct = () => {
  return (
    <>
    <NavBar></NavBar>
    <CreateProduct></CreateProduct>
    <Footer></Footer>
    </>
  )
}
