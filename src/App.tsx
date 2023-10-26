import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Paper, ThemeProvider, createTheme } from "@mui/material";
import { Dashboard } from "@mui/icons-material";
import About from "./components/About";
import CreateProduct from "./components/CreateProduct";
import DeleteProduct from "./components/DeleteProduct";
import Footer from "./components/Footer";
import UsersList from "./components/UsersList";

import ProtectedRoute from "./components/ProtectedRoute";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import UpdateProduct from "./components/EditProductAdmin";
import CheckOut from "./components/CheckOut";
import Profile from "./components/Profile";
import ProductLists from "./components/ProductLists";
import NotFound from "./components/NotFound";
import Logout from "./components/Logout";
import WelcomeSlider from "./components/WelcomeSlider";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProductDetails from "./components/ProductDetails";
import AdminDashboard from "./components/DashBoard";
import EditProductAdmin from "./components/EditProductAdmin";
import EditProduct from "./components/EditProduct";
import UpdateUser from "./components/UpdateUser";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Paper
          style={{
            minHeight: "100%",
            background: theme.palette.background.default,
          }}
        >
          <BrowserRouter>
            <NavBar darkMode={darkMode} handleDarkMode={handleThemeChange} />
            <Routes>
              <Route path="/" element={<WelcomeSlider />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/products/add" element={<CreateProduct />} />
              <Route path="/products" element={<ProductLists />} />
              <Route path="/users" element={<UsersList />} />
              <Route path="/profile" element={<Profile />} />

              <Route path="/delete-product" element={<DeleteProduct />} />
              <Route path="//edit-product" element={<UpdateProduct />} />
              <Route path="/about" element={<About />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/checkout" element={<CheckOut />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/products/:productId" element={<ProductDetails />} />
              <Route path="/*" element={<NotFound />} />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute
                    element={<AdminDashboard />}
                    allowedRoles={["admin"]}
                  />
                }
              />
              <Route
                path="/users"
                element={
                  <ProtectedRoute
                    element={<UsersList />}
                    allowedRoles={["admin"]}
                  />
                }
              />

              <Route
                path="//update-product"
                element={
                  <ProtectedRoute
                    element={<EditProductAdmin />}
                    allowedRoles={["Admin"]}
                  />
                }
              />
              <Route
                path="//update-product/:prodId"
                element={
                  <ProtectedRoute
                    element={<EditProduct />}
                    allowedRoles={["Admin"]}
                  />
                }
              />
              <Route
                path="/create-product"
                element={
                  <ProtectedRoute
                    element={<CreateProduct />}
                    allowedRoles={["admin"]}
                  />
                }
              />
              <Route
                path="/delete-product"
                element={
                  <ProtectedRoute
                    element={<DeleteProduct />}
                    allowedRoles={["admin"]}
                  />
                }
              />
              <Route
                path="/update-user"
                element={
                  <ProtectedRoute
                    element={<UpdateUser />}
                    allowedRoles={["admin"]}
                  />
                }
              />
            </Routes>
            <Footer />
          </BrowserRouter>
        </Paper>
      </ThemeProvider>
    </>
  );
};

export default App;
