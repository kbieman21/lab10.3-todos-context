import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"


function ThemeToggle(){
    const {theme, toggleTheme} = useContext(ThemeContext);

    return(
        <div>
            <h1>Theme Toggle</h1>
            <button onClick={toggleTheme}
            style={{
            padding: "8px 14px",
            borderRadius: "6px",
            border: "1px solid #aaa",
            cursor: "pointer",
            background: "inherit",
            color: "inherit"
        }}>
             {theme === "light"? "🌙 Dark Mode" : "☀️ Light Mode"}
            </button>

        </div>
    )
}

export default ThemeToggle;