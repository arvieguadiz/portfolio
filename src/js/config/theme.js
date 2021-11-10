import { createTheme } from "@material-ui/core/styles";

const themeSettings = () => {
  const lightTheme = createTheme({
    palette: {
      type: 'light',
    },
  });
  
  const darkTheme = createTheme({
    palette: {
      type: 'dark',
    },
  });
  
  return { lightTheme, darkTheme };
}

export default themeSettings;