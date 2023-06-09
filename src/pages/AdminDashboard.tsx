import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddBoxIcon from "@mui/icons-material/AddBox";
import EditIcon from "@mui/icons-material/Edit";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DeleteIcon from "@mui/icons-material/Delete";

const DrawerComponent = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleDashboardClick = () => {
    // Handle click event for admin dashboard
    console.log("Admin Dashboard clicked");
  };

  const handleCreateNewProductClick = () => {
    // Handle click event for create new product
    console.log("Create New Product clicked");
  };

  const handleUpdateProductClick = () => {
    // Handle click event for update product
    console.log("Update Product clicked");
  };

  const handleCreateUserClick = () => {
    // Handle click event for create user
    console.log("Create User clicked");
  };

  const handleDeleteProductClick = () => {
    // Handle click event for delete product
    console.log("Delete Product clicked");
  };

  return (
    <div>
      <IconButton onClick={toggleDrawer} edge="start" color="inherit" aria-label="menu">
        <DashboardIcon />
      </IconButton>
      <Drawer open={isDrawerOpen} onClose={toggleDrawer}>
        <List>
          <ListItem button onClick={handleDashboardClick}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Admin Dashboard" />
          </ListItem>
          <ListItem button onClick={handleCreateNewProductClick}>
            <ListItemIcon>
              <AddBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Create New Product" />
          </ListItem>
          <ListItem button onClick={handleUpdateProductClick}>
            <ListItemIcon>
              <EditIcon />
            </ListItemIcon>
            <ListItemText primary="Update Product" />
          </ListItem>
          <ListItem button onClick={handleCreateUserClick}>
            <ListItemIcon>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText primary="Create User" />
          </ListItem>
          <ListItem button onClick={handleDeleteProductClick}>
            <ListItemIcon>
              <DeleteIcon />
            </ListItemIcon>
            <ListItemText primary="Delete Product" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default DrawerComponent;
