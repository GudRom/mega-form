import { Container } from "@mui/material";

function MainContainer({ children, ...props }) {
  return (
    <Container
      container="main"
      maxWidth="xs"
      sx={{
        marginTop: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {children}
    </Container>
  );
}

export default MainContainer;
