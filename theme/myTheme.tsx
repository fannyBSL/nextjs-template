import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import { blue, pink } from '@material-ui/core/colors';

function myTheme(themeName = 'light') {
    let theme = createMuiTheme({
        palette: {
            primary: {
                light: blue[800],
                main: blue[800],
                dark: blue[500],
            },
            secondary: {
                light: pink[800],
                main: pink[800],
                dark: pink[500],
            }
        }
    });

    theme = responsiveFontSizes(theme)
    return theme;
}

export default myTheme;