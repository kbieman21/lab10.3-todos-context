import { createContext, useEffect, useState } from "react";


type Theme = "light" | "dark";


export const ThemeContext = createContext<{
    theme: Theme,
    toggleTheme: () => void
    }>({theme: 'light', toggleTheme: ()=> {},});


interface ThemeContextProps{
    children: React.ReactNode;
}

export function ThemeProvider({children}:ThemeContextProps){
    const [theme, setTheme] = useState<Theme>(() => {
        const stroedTheme = localStorage.getItem('theme');
        // return stroedTheme ? JSON.parse(stroedTheme) : 'light';
        return stroedTheme ? (stroedTheme as Theme) : 'light';
    });


    // theme toggle
    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
       
        
    }

    
    // persist theme in localStorage
    useEffect(()=>{
        // localStorage.setItem('theme', JSON.stringify(theme))
         localStorage.setItem('theme', theme)
        // applying theme globally
        document.body.className = theme; //
    }, [theme])


    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
  
}