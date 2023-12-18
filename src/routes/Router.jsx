import { Routes, Route } from 'react-router-dom';
import ROUTES from './routesModel';
import AboutPage from '../pages/AboutPage';
import CardsPage from '../cards/pages/CardsPage';
import Sandbox from '../sandbox/Sandbox';
import ErrorPage from '../pages/ErrorPage';
import SignupPage from '../users/pages/SignupPage';
import LoginPage from '../users/pages/LoginPage';
import CardDetailsPage from '../cards/pages/CardDetailsPage';
import Loops from '../sandbox/Loops';
import SetPosts from '../sandbox/hooks/SetPosts';

const Router = () => {
    return (
        <Routes>
            <Route path={ROUTES.ABOUT} element={<AboutPage />}></Route>
            <Route path={ROUTES.CARDS} element={<CardsPage />}></Route>
            <Route path={`${ROUTES.CARD_DETAILS}/:id`} element={<CardDetailsPage />}></Route>

            <Route path={ROUTES.SIGNUP} element={<SignupPage />}></Route>
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />

            <Route path={ROUTES.SANDBOX} element={<Sandbox />}>
                
                <Route path='loops' element={<Loops />}></Route> 
                <Route path='useState' element={<SetPosts />}></Route> 
                <Route path='loops' element={<Loops />}></Route>
                <Route path='loops' element={<Loops />}></Route> 
                <Route path='loops' element={<Loops />}></Route> 
                <Route path='loops' element={<Loops />}></Route> 
                <Route path='loops' element={<Loops />}></Route> 
                <Route path='loops' element={<Loops />}></Route> 
                <Route path='loops' element={<Loops />}></Route> 
                <Route path='loops' element={<Loops />}></Route> 
                <Route path='loops' element={<Loops />}></Route> 
            </Route>
            <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
    );
}

export default Router;