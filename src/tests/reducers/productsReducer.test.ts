import productsReducer, {
  createNewProducts,
  emptyProductList,
  fetchAllProducts,
  sortPrice,
  updateSingleProduct,
} from "../../redux/reducers/productsReducer";
import store from "../../redux/store";
import { UpdateSingleProduct } from "../../types/UpdateSingleProduct";
import { newProduct, newProduct1, newProduct2, newProduct3, newProduct4, product1, product2, product3, product4 } from "../data/products";
import productServer from "../servers/productServer";

beforeAll(() => {
  productServer.listen();
});
afterAll(() => {
  productServer.close();
});
// beforeEach(() => {
//   store.dispatch(emptyProductList());
//   store.dispatch(createNewProducts(newProduct1));
//   store.dispatch(createNewProducts(newProduct2));
//   store.dispatch(createNewProducts(newProduct3));
//   store.dispatch(createNewProducts(newProduct4));
// });

describe("Testing the productsReducer", () => {
  test("Testing the initial State", () => {
    expect(store.getState().productsReducer).toEqual({
      loading: true,
      error: "",
      products: [],
    });
  });
  test("Testing fetchAllProducts for correct fetching", async () => {
    await store.dispatch(fetchAllProducts());
    expect(store.getState().productsReducer.products.length).toEqual(4);
    expect(store.getState().productsReducer.error==="")
    expect(store.getState().productsReducer.loading===false)
  });
  test("Check if the new product is created",async()=>{
    await store.dispatch(createNewProducts(newProduct))
    expect(store.getState().productsReducer.products.length).toBe(5)
  })
  // test("Testing if the product is updated", async()=>{
  //   console.log("res is", store.getState().productsReducer);
  //   const updatedProduct:UpdateSingleProduct ={
  //     id:1,
  //     update:{
  //       title:"updated product",
  //       price:700
  //     }
  //   }
  //   await store.dispatch(updateSingleProduct(updatedProduct))
  //   expect(store.getState().productsReducer.products.find(c=>c.id===updatedProduct.id)?.price).toBe(700)
  // })
  test("Should update available product",async () => {
    // await store.dispatch(fetchAllProducts())
    console.log("product list is",store.getState().productsReducer.products)
    await store.dispatch(updateSingleProduct({
        id:1,
        update:{
            price: 600,
            title:'Testing the modify function'
        }
    }))
    await expect(store.getState().productsReducer.products.find(product =>product.id===1)?.price).toBe(600)
    await expect(store.getState().productsReducer.products.find(product => product.id === 1)?.title).toBe('Testing the modify function')
})
});
