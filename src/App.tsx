import React, { useEffect } from 'react'

import useAppSelector from './hooks/useAppSelector'
import RegisterUser from './components/RegisterUser'
import useAppDispatch from './hooks/useAppDispatch'
import { fetchAllProducts } from './redux/reducers/productsReducer'
const App = () => {
  const products = useAppSelector(state => state.productsReducer)
  const dispatch = useAppDispatch()
 useEffect(()=>{
 dispatch(fetchAllProducts())
 },[])
  console.log(products)

  return (
    <div>
     <RegisterUser/>
    </div>
  )
}

export default App