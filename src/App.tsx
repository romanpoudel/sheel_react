import "@fortawesome/fontawesome-free/css/all.min.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout/MainLayout";
import SearchProvider from "./contexts/searchContext";
import "./index.css";
import { publicRoutes } from "./routes/publicRoutes";
import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/montserrat/400.css"; // Specify weight
import "@fontsource/montserrat/400-italic.css"; // Specify weight and style

function App() {
  return (
    <>
      <SearchProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {publicRoutes.map((route) => (
              <Route path={route.path} element={route.component} />
            ))}
          </Route>
        </Routes>
      </SearchProvider>
    </>
  );
}

export default App;
