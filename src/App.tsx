import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";


function App() {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    const savedTheme = typeof window === "undefined" ? null : localStorage.getItem("portfolio-theme");
    return savedTheme === "light" ? "light" : "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <div className="app-shell min-h-screen transition-colors duration-300">
     <Navbar theme={theme} onToggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")} />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

      </Routes>

    </div>

  );
}

export default App;
