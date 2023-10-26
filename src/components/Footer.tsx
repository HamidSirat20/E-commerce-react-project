import { Typography, Box, Link } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#232F3E",
        padding: "0.5rem",
        textAlign: "center",
        width: "100%",
        position: "fixed",
        bottom: 0,
        left: 0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="body2"
        color="textSecondary"
        sx={{ marginRight: "10px" }}
      >
        Hamid &copy; 2023.
      </Typography>
      <Link
        href="https://www.linkedin.com/in/abdul-hamid-eshaqzada-b67a5bb9/"
        target="_blank"
        rel="noopener"
        sx={{ marginRight: "10px" }}
      >
        <LinkedInIcon />
      </Link>
      <Link
        href="https://github.com/HamidSirat20"
        target="_blank"
        rel="noopener"
      >
        <GitHubIcon />
      </Link>
    </Box>
  );
};

export default Footer;
