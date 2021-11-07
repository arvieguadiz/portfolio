import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme();

const mainTheme = createTheme({
  palette: {
    mode: 'dark'
  }
});

export default mainTheme;