# Front-end Project

![React](https://img.shields.io/badge/React-v.18-blue)
![Redux toolkit](https://img.shields.io/badge/RTK-v.1-purple)
![TypeScript](https://img.shields.io/badge/TypeScript-v.4-green)
![MUI](https://img.shields.io/badge/MUI-v.5.13.2-blue)

This is an e-commerce project developed as part of Integrify's front-end module. The project utilizes React, Redux Toolkit, TypeScript, and MUI (Material-UI) for building the user interface. The application is deployed on Vercel and can be accessed here.

### Live site: https://shopswift.netlify.app/

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

📦src
┣ 📂components
┃ ┣ 📜About.tsx
┃ ┣ 📜Account.tsx
┃ ┣ 📜Cart.tsx
┃ ┣ 📜CheckOut.tsx
┃ ┣ 📜CreateProduct.tsx
┃ ┣ 📜DashBoard.tsx
┃ ┣ 📜DeleteProduct.tsx
┃ ┣ 📜EditProduct.tsx
┃ ┣ 📜EditProductAdmin.tsx
┃ ┣ 📜Footer.tsx
┃ ┣ 📜Login.tsx
┃ ┣ 📜Logout.tsx
┃ ┣ 📜NavBar.tsx
┃ ┣ 📜NavigateCategories.tsx
┃ ┣ 📜NotFound.tsx
┃ ┣ 📜ProductDetails.tsx
┃ ┣ 📜ProductLists.tsx
┃ ┣ 📜Profile.tsx
┃ ┣ 📜ProtectedRoute.tsx
┃ ┣ 📜Signup.tsx
┃ ┣ 📜SortProducts.tsx
┃ ┣ 📜UpdateUser.tsx
┃ ┣ 📜UsersList.tsx
┃ ┗ 📜WelcomeSlider.tsx
┣ 📂hooks
┃ ┣ 📜useAppDispatch.ts
┃ ┣ 📜useAppSelector.ts
┃ ┗ 📜useDebounce.ts
┣ 📂redux
┃ ┣ 📂reducers
┃ ┃ ┣ 📜cartReducer.ts
┃ ┃ ┣ 📜categoryReducer.ts
┃ ┃ ┣ 📜drawerReducer.ts
┃ ┃ ┣ 📜productsReducer.ts
┃ ┃ ┣ 📜sliderReducer.ts
┃ ┃ ┗ 📜usersReducer.ts
┃ ┗ 📜store.ts
┣ 📂routes
┣ 📂tests
┃ ┣ 📂data
┃ ┃ ┣ 📂sliderData
┃ ┃ ┃ ┣ 📜accessories.jpg
┃ ┃ ┃ ┣ 📜books.jpg
┃ ┃ ┃ ┣ 📜clothes.jpg
┃ ┃ ┃ ┣ 📜electronics.jpg
┃ ┃ ┃ ┣ 📜furniture.jpg
┃ ┃ ┃ ┗ 📜sliderData.tsx
┃ ┃ ┣ 📜category.ts
┃ ┃ ┗ 📜products.ts
┃ ┣ 📂reducers
┃ ┃ ┗ 📜productsReducer.test.ts
┃ ┗ 📂servers
┃ ┃ ┗ 📜productServer.ts
┣ 📂types
┃ ┣ 📜NewProduct.ts
┃ ┣ 📜Product.ts
┃ ┣ 📜UpdateSingleProduct.ts
┃ ┣ 📜User.ts
┃ ┗ 📜UserLogin.ts
┣ 📜App.tsx
┣ 📜index.tsx
┣ 📜react-app-env.d.ts
┣ 📜reportWebVitals.ts
┗ 📜setupTests.ts
