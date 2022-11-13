import axios from 'axios';
export const axiosInstance = (baseURL: string) => {
    return axios.create({ baseURL });
};
