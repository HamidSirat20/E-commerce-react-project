import useAppSelector from "../hooks/useAppSelector";
import { Container, Typography, Box, Avatar } from "@mui/material";

const Profile = () => {
  const currentUser = useAppSelector(
    (state) => state.usersReducers.currentUser
  );

  return (
    <Container
      style={{
        marginTop: "9rem",
        paddingBottom: "5rem",
        textAlign: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Avatar
        alt="User Avatar"
        src={currentUser?.avatar}
        sx={{ width: 150, height: 150, mb: 2 }}
      />
      <Typography variant="h3" gutterBottom>
        {currentUser?.name}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {currentUser?.email}
      </Typography>
    </Container>
  );
};

export default Profile;
