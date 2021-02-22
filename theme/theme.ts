
export type ThemeType = typeof light; // This is the type definition for theme object.

export const light = {
    primary: "#f45511",
    text: "#000",
    background: "#fff"
}
export const dark: ThemeType = {
    primary: "#616161",
    text: "#fff",
    background: "#000"
}

const theme = light; // set the light theme as the default.
export default theme;

