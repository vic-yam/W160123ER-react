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
import HooksWrapper from '../sandbox/hooks/HooksWrapper';
import LifeCycleHooks from '../sandbox/life-cycle-hooks/LifeCycleHooks';
import UseStateCycle from '../sandbox/life-cycle-hooks/UseStateCycle';
import UseEffectAsComponentDidMount from '../sandbox/life-cycle-hooks/UseEffectAsComponentDidMount';
import UseEffectAsComponentDidUpdate from '../sandbox/life-cycle-hooks/UseEffectAsComponentDidUpdate';
import UseEffectAsComponentWillUnmount from '../sandbox/life-cycle-hooks/UseEffectAsComponentWillUnmount';
import UseEffectNoDependencies from '../sandbox/life-cycle-hooks/UseEffectNoDependancies';
import CustomHooks from '../sandbox/custom-hooks/CustomHooks';
import CustomCounterHook from '../sandbox/custom-hooks/CustomCounterHook';
import Memoization from '../sandbox/memoization/Memoization';
import UseCallBack from '../sandbox/memoization/use-callback/UseCallback';
import UseMemo from '../sandbox/memoization/use-callback/UseMemo';
import A from '../sandbox/context/components/A';
import FormTest from '../sandbox/forms/FormTest';
import MyCardsPage from '../cards/pages/MyCardsPage';
import CreateCardPage from '../cards/pages/CreateCardPage';
import EditCardPage from '../cards/pages/EditCardPage';
import FavCardsPage from '../cards/pages/FavCardsPage';

const Router = () => {
    return (
        <Routes>
            <Route path={ROUTES.FAV_CARDS} element={<FavCardsPage />}></Route>
            <Route path={ROUTES.CREATE_CARD} element={<CreateCardPage />}></Route>
            <Route path={ROUTES.MY_CARDS} element={<MyCardsPage />}></Route>
            <Route path={ROUTES.ABOUT} element={<AboutPage />}></Route>
            <Route path={ROUTES.CARDS} element={<CardsPage />}></Route>
            <Route path={`${ROUTES.CARD_DETAILS}/:id`} element={<CardDetailsPage />}></Route>
            <Route path={`${ROUTES.EDIT_CARD}/:id`} element={<EditCardPage />}></Route>
            <Route path={ROUTES.SIGNUP} element={<SignupPage />}></Route>
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />

            <Route path={ROUTES.SANDBOX} element={<Sandbox />}>
                <Route path="hooks" element={<HooksWrapper />}>
                    <Route path="set-posts" element={<SetPosts />}></Route>
                </Route>
                <Route path="life-cycle-hooks" element={<LifeCycleHooks />}>
                    <Route path="use-state" element={<UseStateCycle />}></Route>
                    <Route path="useEffect-did-mount" element={<UseEffectAsComponentDidMount />}></Route>
                    <Route path="useEffect-did-update" element={<UseEffectAsComponentDidUpdate />}></Route>
                    <Route path="useEffect-will-unmount" element={<UseEffectAsComponentWillUnmount />}></Route>
                    <Route path="useEffect-did-update-no-deps" element={<UseEffectNoDependencies />}></Route>

                </Route>
                <Route path="custom-hooks" element={<CustomHooks />}>
                    <Route path="custom-counter" element={<CustomCounterHook />}></Route>
                </Route>
                <Route path="memoization" element={<Memoization />}>
                    <Route path="use-callback" element={<UseCallBack />}></Route>
                    <Route path="use-memo" element={<UseMemo />}></Route>
                </Route>
                <Route path='loops' element={<Loops />}></Route>
                <Route path='context' element={<A />}></Route>
                <Route path='form' element={<FormTest />}></Route>

            </Route>
            <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
    );
}

export default Router;