import {
  AppBar,
  Badge,
  Button,
  Divider,
  Drawer,
  FormControlLabel,
  IconButton,
  List,
  ListItem,
  Stack,
  Switch,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import useAppSelector from "../hooks/useAppSelector";
import useAppDispatch from "../hooks/useAppDispatch";
import { isCartVisible } from "../redux/reducers/drawerReducer";
import Account from "./Account";
import { useState } from "react";
import { Theme } from "@mui/material/styles";
import logo from "../tests/data/logo.png";
interface Props {
  darkMode: boolean;
  handleDarkMode: () => void;
}

const NavBar = ({ darkMode, handleDarkMode }: Props) => {
  const navigate = useNavigate();
  const cartProduct = useAppSelector((state) => state.cartReducer.cartItems);
  const currentUser = useAppSelector(
    (state) => state.usersReducers.currentUser
  );
  const totalQuantity = cartProduct.reduce((accumulator, currentProduct) => {
    return accumulator + currentProduct.quantity;
  }, 0);

  const dispatch = useAppDispatch();
  const handleCartToggle = () => {
    dispatch(isCartVisible());
    navigate("/cart");
  };

  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <>
      <AppBar style={{ backgroundColor: "#37475A" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            color="white"
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <NavLink to="/">
              <Button
                color="inherit"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                ShopSwift
              </Button>
            </NavLink>
            <Tooltip title="Switch Mode" arrow>
              <IconButton color="secondary">
                <Switch checked={darkMode} onChange={handleDarkMode} />
              </IconButton>
            </Tooltip>
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            {!isSmallScreen ? (
              <>
                <NavLink to="/">
                  <Button
                    color="inherit"
                    sx={{ color: "white", fontWeight: "bold" }}
                  >
                    Home
                  </Button>
                </NavLink>
                <NavLink to="/products">
                  <Button
                    color="inherit"
                    sx={{ color: "white", fontWeight: "bold" }}
                  >
                    Products
                  </Button>
                </NavLink>
                <NavLink to="/about">
                  <Button
                    color="inherit"
                    sx={{ color: "white", fontWeight: "bold" }}
                  >
                    About
                  </Button>
                </NavLink>
                {currentUser?.role === "admin" && (
                  <Tooltip title="Dashboard" arrow>
                    <IconButton component={Link} to="/admin" color="inherit">
                      <DashboardOutlinedIcon style={{ color: "black" }} />
                    </IconButton>
                  </Tooltip>
                )}
              </>
            ) : (
              ""
            )}
            <IconButton onClick={handleCartToggle}>
              <Badge badgeContent={totalQuantity} color="secondary">
                <ShoppingCartIcon
                  fontSize="large"
                  color="inherit"
                  aria-label="shopping-cart"
                />
              </Badge>
            </IconButton>
            <Account />
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerClose}
        variant="temporary"
        sx={{
          display: { xs: "block", sm: "none" },
        }}
      >
        <List>
          <ListItem button onClick={handleDrawerClose}>
            <Typography variant="h5">PrimePicks</Typography>
          </ListItem>
          <Divider />
          <ListItem>
            <FormControlLabel
              control={<Switch checked={darkMode} onChange={handleDarkMode} />}
              label={darkMode ? "Light Mode" : "Dark Mode"}
            />
          </ListItem>
          <Divider />
          {["Home", "Products", "About"].map((text, index) => (
            <ListItem button key={text} onClick={handleDrawerClose}>
              <NavLink
                to={text.toLowerCase()}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography variant="body1">{text}</Typography>
              </NavLink>
            </ListItem>
          ))}
          <Divider />
          {currentUser?.role === "admin" && (
            <Tooltip title="Dashboard" arrow>
              <IconButton component={Link} to="/admin" color="inherit">
                <DashboardOutlinedIcon style={{ color: "black" }} />
                Dashboard
              </IconButton>
            </Tooltip>
          )}
        </List>
      </Drawer>
      <Outlet />
    </>
  );
};

export default NavBar;
