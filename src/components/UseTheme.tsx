import { useEffect, useState } from "react";

const UseTheme = (defaultTheme = "light") => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("app-theme") || defaultTheme;
  });

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  const useTheme: any = () => {
    setTheme((prev: any) => (prev.theme === "light" ? "light" : "dark"));
  };

  return { theme, setTheme, useTheme };
};

export default UseTheme;
