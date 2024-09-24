import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            lightBack: '#f8f5ef',
            main:  '#423f32',
            dark: '#4a148c',
            extraLight: '#f3e5f5'
        },
        secondary: {
            light: '#26c6da',
            main: '#514c37',
            dark: 'ea80fc'
        },
        error: {
            main: '#e91e63',
            light: '#f06292'
        },
        border: {
          main:  '#38384f'},
        success: {
            main:'#4caf50'}
    }
})

export default theme;
//'#3d4074'