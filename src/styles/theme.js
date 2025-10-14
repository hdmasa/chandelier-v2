"use client";
import { createTheme } from "@mui/material/styles";
import { faIR } from "@mui/material/locale";

const theme = createTheme(
  {
    direction: "rtl",
    typography: {
      fontFamily: '"Vazirmatn", "DM Serif Text", sans-serif',
      fontSize: 14,
    },
    palette: {
    
      primary: { main: "#e7d393" },
      text: { primary: "#ffffff", secondary: "#e0e0e0" },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            direction: "rtl",
            fontFamily: '"Vazirmatn", "DM Serif Text", sans-serif',
            backgroundColor: "#000",
            color: "#fff",
          },
        },
      },
    },
  },
  faIR
);

export default theme;