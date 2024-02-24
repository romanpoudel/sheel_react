import { Route, Routes } from 'react-router-dom';
import './index.css';
import { publicRoutes } from './routes/publicRoutes';
import MainLayout from './components/layouts/MainLayout/MainLayout';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          {publicRoutes.map(route => (
            <Route path={route.path} element={route.component} />
          ))}
        </Route>
      </Routes>



    </>
  );
};

export default App;
