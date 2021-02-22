import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { StylesProvider, MuiThemeProvider } from "@material-ui/core/styles";

export const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
         width: 100vw;
         height: 100vh;
         font-family: Lato;
    }
`;

function ThemeWrapper({ children, theme }) {
    return (
        <>
        <ThemeProvider theme={theme} >
            <StylesProvider injectFirst>
                <MuiThemeProvider theme={theme}>
                    <GlobalStyle />
                    {children}
                </MuiThemeProvider>
            </StylesProvider>
        </ThemeProvider>
        </>
    )
}

export default ThemeWrapper;

