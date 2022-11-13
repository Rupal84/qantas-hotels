import Axios from 'axios';
import { IHotel } from '../common/types';

export const callApi = async (): Promise<{ data: IHotel[] }> =>
    await Axios({
        url: 'http://localhost:3001/results',
        method: 'GET',
    });
