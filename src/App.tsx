import { Route, Routes, createBrowserRouter } from 'react-router-dom';
import { Carousel } from './components/Components';
import CardWithoutImage from './components/elements/Card/CardThreeD';
import CardWithImage from './components/elements/Card/CardThreeDImage';

import './index.css';
import Home from './containers/Home/Home';
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
