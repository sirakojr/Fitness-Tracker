import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import LandingPage from "./features/landing/LandingPage";
import useTheme from "./store/theme";
import { useEffect } from "react";

function App() {
  const theme = useTheme((stata) => stata.theme);
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("mode", theme)
  }, [theme]);
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;