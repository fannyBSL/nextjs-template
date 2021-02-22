import {} from 'styled-components';
import { ThemeType } from './theme'; // Import type from theme.ts
declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {} // extends the global DefaultTheme with ThemeType.
}