import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button
        onClick={toggleTheme}
        //     style={{
        //     padding: "8px 14px",
        //     borderRadius: "6px",
        //     border: "1px solid #aaa",
        //     cursor: "pointer",
        //     background: "inherit",
        //     color: "inherit"

        // }}
        className="fixed top-4 right-40
            px-4 py-2 rounded-md
            bg-gray-200 dark:bg-gray-700
            hover:bg-gray-300 dark:hover:bg-gray-600
            border dark:border-gray-600
            transition shadow"
      >
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </div>
  );
}

export default ThemeToggle;
