import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    blue: '#4e92df',
    drkBlue: '#051C2C',
    green: '#1dd264',
    error: {
      main: red.A400,
    },
  },
});

export default theme;
