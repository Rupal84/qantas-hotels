import { IHotel } from '../common/types';
import { axiosInstance } from './AxiosInstance';

export const callApi = async (): Promise<{ data: IHotel[] }> => {
    const axios = axiosInstance('http://localhost:3001');
    return await axios({ url: '/results', method: 'GET' });
};

export const sortByPrice = (sortOrder: string, results: IHotel[]) => {
    const sortedResults = results.sort((hotelA, hotelB) => {
        const priceHotelA = hotelA.offer.displayPrice.amount;
        const priceHotelB = hotelB.offer.displayPrice.amount;
        return sortOrder === 'l2h'
            ? priceHotelA - priceHotelB
            : priceHotelB - priceHotelA;
    });
    return [...sortedResults];
};
