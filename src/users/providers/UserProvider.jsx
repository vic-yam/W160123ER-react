import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getToken, getUser } from "../services/localStorageService";
import { node } from "prop-types";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(() => {
        const tokenFromLS = getToken();
        if(tokenFromLS) {
            const userFromLS = getUser();
            setUser(userFromLS);
        }
        return tokenFromLS;
    });

    useEffect(() => {
        if (!user) {
            const userFromLS = getUser();
            setUser(userFromLS);
        }
    }, [user])


    const value = useMemo(() => ({ user, setUser, token, setToken }), [user, token]);

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
}

UserContext.propTypes = {
    children: node.isRequired,
}