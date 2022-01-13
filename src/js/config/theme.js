import { createTheme } from '@mui/material/styles';

const themeSettings = () => {
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
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
      mode: 'dark',
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