 # Front-end Project
![React](https://img.shields.io/badge/React-v.18-blue)
![Redux toolkit](https://img.shields.io/badge/RTK-v.1-purple)
![TypeScript](https://img.shields.io/badge/TypeScript-v.4-green)
![MUI](https://img.shields.io/badge/MUI-v.5.13.2-blue)

This is an e-commerce project developed as part of Integrify's front-end module. The project utilizes React, Redux Toolkit, TypeScript, and MUI (Material-UI) for building the user interface. The application is deployed on Vercel and can be accessed here.

## Learning Outcomes
During the development of this project, I achieved the following learning outcomes:

- Gain a solid understanding of Redux and when it is preferable to use it over useState.
- Deepen my knowledge of TypeScript and its benefits in frontend development.
- Explore the features of MUI and appreciate its simplicity and ease of use.
## Project Requirements
- Utilize the API endpoint https://fakeapi.platzi.com/ to create an e-commerce website. Familiarize yourself with the API documentation and learn how to use the available endpoints.
- Create at least four pages: Home page, product page, profile page (accessible only for logged-in users), and cart page (can be a separate page or a modal).
Implement Redux store with the following features:
- Product reducer: Retrieve all products, find a single product, sort products by categories, sort products by price. Allow admin users to create, update, and delete products.
- User reducer: Enable user registration and login functionality.
- Cart reducer: Implement adding products to the cart, removing products from the cart, and updating the quantity of products in the cart.

## How to Use
- Run npm install to install all the dependencies.
- Run npm start to start the development server. The application will be accessible at http://localhost:3000. Any changes made to the code will trigger an automatic reload in the browser.
- Use npm test to launch the test runner in interactive watch mode.
Run npm run build to build the application for production. The optimized build will be located in the build folder.
## Directory Structure
# src

* [components/](.\src\components)
  * [Cart.tsx](.\src\components\Cart.tsx)
  * [CheckOutComponent.tsx](.\src\components\CheckOutComponent.tsx)
  * [CreateProduct.tsx](.\src\components\CreateProduct.tsx)
  * [CreateUser.tsx](.\src\components\CreateUser.tsx)
  * [DeleteProduct.tsx](.\src\components\DeleteProduct.tsx)
  * [DropDown.tsx](.\src\components\DropDown.tsx)
  * [EditProduct.tsx](.\src\components\EditProduct.tsx)
  * [Footer.tsx](.\src\components\Footer.tsx)
  * [HamburgerMenu.tsx](.\src\components\HamburgerMenu.tsx)
  * [LogedOut.tsx](.\src\components\LogedOut.tsx)
  * [LogIn.tsx](.\src\components\LogIn.tsx)
  * [NavBar.tsx](.\src\components\NavBar.tsx)
  * [NavigateCategories.tsx](.\src\components\NavigateCategories.tsx)
  * [Profile.tsx](.\src\components\Profile.tsx)
  * [SingleProduct.tsx](.\src\components\SingleProduct.tsx)
  * [SortProducts.tsx](.\src\components\SortProducts.tsx)
  * [TemplateCard.tsx](.\src\components\TemplateCard.tsx)
  * [TestLogIn.tsx](.\src\components\TestLogIn.tsx)
  * [UpdateUser.tsx](.\src\components\UpdateUser.tsx)
  * [UsersList.tsx](.\src\components\UsersList.tsx)
  * [WelcomeSlider.tsx](.\src\components\WelcomeSlider.tsx)
* [hooks/](.\src\hooks)
  * [useAppDispatch.ts](.\src\hooks\useAppDispatch.ts)
  * [useAppSelector.ts](.\src\hooks\useAppSelector.ts)
  * [useDebounce.ts](.\src\hooks\useDebounce.ts)
* [pages/](.\src\pages)
  * [AdminDashboard.tsx](.\src\pages\AdminDashboard.tsx)
  * [CreateNewProduct.tsx](.\src\pages\CreateNewProduct.tsx)
  * [DeleteSingleProduct.tsx](.\src\pages\DeleteSingleProduct.tsx)
  * [HeaderFooter.tsx](.\src\pages\HeaderFooter.tsx)
  * [Home.tsx](.\src\pages\Home.tsx)
  * [LogIn.tsx](.\src\pages\LogIn.tsx)
  * [LogOut.tsx](.\src\pages\LogOut.tsx)
  * [NotFound.tsx](.\src\pages\NotFound.tsx)
  * [Products.tsx](.\src\pages\Products.tsx)
  * [Profile.tsx](.\src\pages\Profile.tsx)
  * [SignUp.tsx](.\src\pages\SignUp.tsx)
  * [SingleProductPage.tsx](.\src\pages\SingleProductPage.tsx)
  * [UpdateProduct.tsx](.\src\pages\UpdateProduct.tsx)
  * [UserList.tsx](.\src\pages\UserList.tsx)
* [redux/](.\src\redux)
  * [reducers/](.\src\redux\reducers)
    * [cartReducer.ts](.\src\redux\reducers\cartReducer.ts)
    * [categoryReducer.ts](.\src\redux\reducers\categoryReducer.ts)
    * [drawerReducer.ts](.\src\redux\reducers\drawerReducer.ts)
    * [productsReducer.ts](.\src\redux\reducers\productsReducer.ts)
    * [sliderReducer.ts](.\src\redux\reducers\sliderReducer.ts)
    * [usersReducer.ts](.\src\redux\reducers\usersReducer.ts)
  * [store.ts](.\src\redux\store.ts)
* [routes/](.\src\routes)
  * [Routes.tsx](.\src\routes\Routes.tsx)
* [tests/](.\src\tests)
  * [data/](.\src\tests\data)
    * [sliderData/](.\src\tests\data\sliderData)
      * [accessories.jpg](.\src\tests\data\sliderData\accessories.jpg)
      * [books.jpg](.\src\tests\data\sliderData\books.jpg)
      * [clothes.jpg](.\src\tests\data\sliderData\clothes.jpg)
      * [electronics.jpg](.\src\tests\data\sliderData\electronics.jpg)
      * [furniture.jpg](.\src\tests\data\sliderData\furniture.jpg)
      * [shoes.jpg](.\src\tests\data\sliderData\shoes.jpg)
      * [sliderData.tsx](.\src\tests\data\sliderData\sliderData.tsx)
    * [category.ts](.\src\tests\data\category.ts)
    * [products.ts](.\src\tests\data\products.ts)
  * [reducers/](.\src\tests\reducers)
    * [productsReducer.test.ts](.\src\tests\reducers\productsReducer.test.ts)
  * [servers/](.\src\tests\servers)
    * [productServer.ts](.\src\tests\servers\productServer.ts)
* [types/](.\src\types)
  * [NewProduct.ts](.\src\types\NewProduct.ts)
  * [Product.ts](.\src\types\Product.ts)
  * [UpdateSingleProduct.ts](.\src\types\UpdateSingleProduct.ts)
  * [User.ts](.\src\types\User.ts)
  * [UserLogin.ts](.\src\types\UserLogin.ts)
* [App.tsx](.\src\App.tsx)
* [index.tsx](.\src\index.tsx)
* [react-app-env.d.ts](.\src\react-app-env.d.ts)
* [reportWebVitals.ts](.\src\reportWebVitals.ts)
* [setupTests.ts](.\src\setupTests.ts)
