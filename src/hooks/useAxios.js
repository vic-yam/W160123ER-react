import axios from 'axios';
import {
    useSnackbar
} from '../providers/SnackbarProvider';
import {
    useUser
} from '../users/providers/UserProvider';
import {
    useEffect
} from 'react';

const useAxios = () => {

    const snack = useSnackbar();
    const {
        token
    } = useUser();

    useEffect(() => {


        axios.defaults.headers.common['x-auth-token'] = token;
        // axios.defaults.headers.common.Authorization = token;

        if (snack) {

            axios.interceptors.request.use((data) => {
                return Promise.resolve(data);
            }, null);
            axios.interceptors.response.use(null,
                error => {
                    const expectedError = error.response && error.response.status >= 400;
                    if (expectedError) snack("error", error.message);

                    return Promise.reject(error);
                });
        }
    }, [token, snack]);

}

export default useAxios;