import React, { useState } from "react";
import "../App.css"; // We'll assume you have some basic CSS for light and dark modes.

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // State to track current theme

  // Toggle the theme between light and dark
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode); // Switch between true (dark) and false (light)
  };

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
      {/* Toggle switch */}
      <button onClick={toggleTheme}>
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
};

export default ThemeToggle;
