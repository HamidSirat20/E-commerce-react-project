import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Container, Typography, Grid } from "@mui/material";

const AdminDashboard = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography
        variant="h2"
        sx={{ color: "#007bff", textAlign: "center", mb: 4 }}
      >
        Admin Dashboard
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={4}>
          <Link to="/create-product" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary" fullWidth>
              Create Product
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} md={4}>
          <Link to="/delete-product" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary" fullWidth>
              Delete Product
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} md={4}>
          <Link to="/update-product" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary" fullWidth>
              Update Product
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} md={4}>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary" fullWidth>
              Users List
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} md={4}>
          <Link to="/update-user" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary" fullWidth>
              Update a User
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminDashboard;
