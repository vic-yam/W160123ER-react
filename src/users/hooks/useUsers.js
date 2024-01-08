import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../providers/UserProvider";
import useAxios from "../../hooks/useAxios";
import { login } from "../services/usersApiService";
import { getUser, setTokenInLocalStorage } from "../services/localStorageService";
import ROUTES from "../../routes/routesModel";


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

    return {
        users,
        user,
        loading,
        error,
        handleLogin
    }
}

export default useUsers;