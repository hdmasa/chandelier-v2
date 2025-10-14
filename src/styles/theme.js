"use client";
import { createTheme } from "@mui/material/styles";
const theme = createTheme(
  {
    direction: "rtl",
    typography: {
      fontFamily: '"Vazirmatn", "DM Serif Text", sans-serif',
      fontSize: 14,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            direction: "rtl",
            fontFamily: '"Vazirmatn", "DM Serif Text", sans-serif',
            backgroundColor:'#000000',
          },
        },
      },
    },
  },

);

export default theme;