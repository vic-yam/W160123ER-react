import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../providers/UserProvider";
import useAxios from "../../hooks/useAxios";
import { login, signup } from "../services/usersApiService";
import { getUser, removeToken, setTokenInLocalStorage } from "../services/localStorageService";
import ROUTES from "../../routes/routesModel";
import normalizeUser from "../helpers/normalization/normalizeUser";


const useUsers = () => {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const { user, setUser, setToken} = useUser();

    useAxios();

    const requestStatus = useCallback((loading, errorMessage, users, user = null) => {
        setLoading(loading);
        setError(errorMessage);
        setUsers(users);
        setUser(user);
    },[setUser]);


    const handleLogin = useCallback( async (user) => {
        try {
            const token = await login(user);
            setTokenInLocalStorage(token);
            setToken(token);
            const userFromLocalStorage = getUser();
            requestStatus(false, null, null, userFromLocalStorage);
            navigate(ROUTES.CARDS);
        } catch (error) {
            requestStatus(false, error.message, null);   
        }
    }, [navigate, requestStatus, setToken]);

     const handleSignup = useCallback(async (user) => {
        try {
            const normalizedUser = normalizeUser(user);
            await signup(normalizedUser);
            await handleLogin({email: user.email, password: user.password});
        } catch (error) {
            requestStatus(false, error.message, null);
        }
    }
    ,[requestStatus, handleLogin]);

    const handleLogout = useCallback(() => {
        removeToken();
        setToken(null);
        setUser(null);
    }, [setUser, setToken]);


    const value = useMemo(() => ({
        users,
        user,
        loading,
        error
    }), [users, user, loading, error]);

    return {
        ...value,
        handleLogin,
        handleLogout,
        handleSignup
    }
}

export default useUsers;