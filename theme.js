import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import deepPurple from '@material-ui/core/colors/deepPurple';
import red from '@material-ui/core/colors/red';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#4527a0',
      contrastText: '#fff',
      light: '#7953d2',
      dark: '#000070'
    },
    secondary: {
      main: '#9c27b0',
      light: '#d05ce3',
      dark: '#6a0080',
      contrastText: '#fff',
    },
    error: {
      main: red.A400,
    },
    background: {
      default:'#4527a0',
    },
  },
  overrides: {
    MuiFormLabel: {
      root: {
        "&$focused": {
          color: "#fff"
        }
      }
    },
    MuiOutlinedInput: {
      root: {
        '& $notchedOutline': {
          borderColor: "#fff"
        },
        '&$focused $notchedOutline': {
          borderColor: "#fff"
        }
      }
    }
  },
});

export default theme;