import { Routes, Route } from 'react-router-dom';
import ROUTES from './routesModel';
import AboutPage from '../pages/AboutPage';
import CardsPage from '../cards/pages/CardsPage';
import Sandbox from '../sandbox/Sandbox';
import ErrorPage from '../pages/ErrorPage';

const Router = () => {
    return (
        <Routes>
            <Route path={ROUTES.ABOUT} element={<AboutPage />}></Route>
            <Route path={ROUTES.CARDS} element={<CardsPage />}></Route>
            <Route path="/sandbox" element={<Sandbox />}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
    );
}

export default Router;