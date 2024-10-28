import { createContext } from 'react';

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
    ORANGE = 'app_orange_theme',
}

export interface ThemeContextProps {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: Theme.LIGHT,
    setTheme(theme:Theme) {

    },
});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
