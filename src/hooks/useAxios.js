import axios from 'axios';

const useAxios = () => {
    axios.interceptors.request.use((data) => {
        return Promise.resolve(data);
    }, null);

    axios.interceptors.response.use(
        data => {
            return Promise.resolve(data);
        },
        error => {
            return Promise.reject(error);
        });
}

export default useAxios;