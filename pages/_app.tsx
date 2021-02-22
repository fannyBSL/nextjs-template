import React, { useEffect } from 'react';
import { AppProps } from "next/app";
import {useMediaQuery} from "@material-ui/core";
import { ThemeWrapper, appTheme} from "../theme"

export const App = ({ Component, pageProps }: AppProps): JSX.Element => {
    // _app.tsx executes common js on every page

    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark");
    const theming = React.useMemo(
        () => appTheme(prefersDarkMode ? "dark" : "light"),
        [prefersDarkMode]
    );

    return(
        <ThemeWrapper theme={appTheme}>
                <Component {...pageProps}/>
        </ThemeWrapper>
);
}

export default App;



