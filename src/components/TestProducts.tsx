import React from 'react'
import withLoading from './withLoading'
import ProductCard from './ProductCard'
import Product from '../types/Product'
const TestProducts = ({data}:{data:Product[]}) => {
  return (
    <div>
        {
            data.map((product)=>{
                return(<ProductCard
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    description={product.description}
                    category={{
                      id: product.category.id,
                      name: product.category.name,
                      image: product.category.image,
                    }}
                    images={product.images}
                  ></ProductCard>)
            })
        }
    </div>
  )
}

export const ProductWithLoading = withLoading(TestProducts,'https://api.escuelajs.co/api/v1/products')
