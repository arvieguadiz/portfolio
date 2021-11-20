import { createTheme } from "@material-ui/core/styles";

const themeSettings = () => {
  const lightTheme = createTheme({
    palette: {
      type: 'light',
    },
    typography: {
      h4: {
        fontWeight: 700,
      },
      h5: {
        fontWeight: 700,
      },
      h6: {
        fontWeight: 700,
      },
    },
  });
  
  const darkTheme = createTheme({
    palette: {
      type: 'dark',
    },
    typography: {
      h4: {
        fontWeight: 700,
      },
      h5: {
        fontWeight: 700,
      },
      h6: {
        fontWeight: 700,
      },
    },
  });
  
  return { lightTheme, darkTheme };
}

export default themeSettings;