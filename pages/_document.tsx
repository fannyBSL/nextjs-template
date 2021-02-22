import React from 'react';
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet as StyledComponentSheets } from 'styled-components';
import { ServerStyleSheets as MaterialUiServerStyleSheets } from '@material-ui/styles';
import theme from '../theme/theme';

export default class MyDocument extends Document {
    // _document.tsx renders the document structure without running any js, processed on server-side only
    static async getInitialProps(ctx: DocumentContext) {
        const styledComponentSheets = new StyledComponentSheets();
        const materialUiServerStyleSheets = new MaterialUiServerStyleSheets();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props =>
                        styledComponentSheets.collectStyles(
                            materialUiServerStyleSheets.collect(<App {...props} />)
                        )
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {styledComponentSheets.getStyleElement()}
                        {materialUiServerStyleSheets.getStyleElement()}
                    </>
                )
            };
        } finally {
            styledComponentSheets.seal();
        }
    }
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="theme-color" content={theme.primary} />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:300,400,500,700&display=swap" />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto+Slab:300,400,500,700&display=swap"
                    />
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}