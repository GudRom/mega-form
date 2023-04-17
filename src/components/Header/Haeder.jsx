import { ThemeProvider, Typography, createTheme } from "@mui/material";
import React from "react";

const Header = () => {
  const theme = createTheme({
    typography: {
      fontSize: 25,
      fontFamily: "Permanent Marker",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Typography
        sx={{
          margin: theme.spacing(3, 0, 2),
          textAlign: "center",
          color: "deeppink",
          textShadow: "1px 1px darkmagenta",
        }}
        component={"h1"}
        variant="h5"
      >
        The Ultimate Form Challenge
      </Typography>
    </ThemeProvider>
  );
};

export default Header;
