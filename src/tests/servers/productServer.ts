import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { newProduct, product1, product2, product3, product4 } from '../data/products'
import { NewProduct } from '../../types/NewProduct'
import Product from '../../types/Product'
import { categories, categoryA } from '../data/category'

const productServer = setupServer(
  // Describe the requests to mock.
  rest.get("https://api.escuelajs.co/api/v1/products", (req, res, ctx) => {
    return res(
      ctx.json([product1,product2,product3,product4]),
    )
  }),
  rest.post("https://api.escuelajs.co/api/v1/products/", async (req,res,ctx) => {
    const newProduct = await req.json() as NewProduct
    const category = categories.find(c=>c.id===newProduct.categoryId)
    const error:string[]=[]
    let addedProduct:Product|null =null
    if(!category){
      error.push("category does not exist")
    }else{
      addedProduct = {
        title: newProduct.title,
        price: newProduct.price,
        description: newProduct.description,
        category: categoryA,
        images: newProduct.images,
        id: 6
      }
   }
   return res(
    ctx.json(addedProduct)
   )
  })
)

export default productServer