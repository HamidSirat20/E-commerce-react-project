import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Products from '../pages/Products'
import SignUp from '../pages/SignUp'
import Profile from '../pages/Profile'
import Signin from '../pages/LogIn'
import UsersList from '../pages/UserList'
import { CreateNewProduct } from '../pages/CreateNewProduct'
import DeleteSingleProduct from '../pages/DeleteSingleProduct'
import UpdateProduct from '../pages/UpdateProduct'
import TestLogIn from '../components/TestLogIn'
import CheckOutComponent from '../components/CheckOutComponent'
import LogIn from '../components/LogIn'
import NavBar from '../components/NavBar'
import LogOut from '../pages/LogOut'
import UserLogin from '../pages/LogIn'
import HeaderFooter from '../pages/HeaderFooter'
import SingleProductPage from '../pages/SingleProductPage'

const route = createBrowserRouter([
  {
    path:'/',
    element:<HeaderFooter/> ,
    errorElement: <NotFound />,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/users",
        element: <UsersList />
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "/login",
        element: <UserLogin/>
      },
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/new-product",
        element: <CreateNewProduct />
      },
      {
        path: "/delete-product",
        element: <DeleteSingleProduct />
      },
      {
        path: "/edit-product",
        element: <UpdateProduct />
      },
      {
        path: "/logout",
        element: <LogOut/>
      },
      {
        path: "checkout",
        element: <CheckOutComponent/>
      },
      {
        path: ":userId",
        element: <SingleProductPage />
      },{
        path: "profile",
        element: <Profile />
      },
    ]
  },

  ])

export default route