import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Products from '../pages/Products'
import SignUp from '../pages/SignUp'
import Profile from '../pages/Profile'
import Login from '../pages/Login'
import UsersList from '../pages/UserList'
import { CreateNewProduct } from '../pages/CreateNewProduct'
import DeleteSingleProduct from '../pages/DeleteSingleProduct'
import UpdateProduct from '../pages/UpdateProduct'

const route = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <NotFound />,
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
      path: "/signin",
      element: <Login />
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
    }
  ])

export default route