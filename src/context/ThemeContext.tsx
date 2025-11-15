import { createContext, useState } from "react";

export const ThemeContext = createContext('light');

interface ThemeContextProps{
    children: React.ReactNode;
}

export function ThemeProvider({children}:ThemeContextProps){
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
  
}