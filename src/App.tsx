import "@fortawesome/fontawesome-free/css/all.min.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout/MainLayout";
import SearchProvider from "./contexts/searchContext";
import "./index.css";
import { publicRoutes } from "./routes/publicRoutes";

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
