import * as axiosInstance from './AxiosInstance';
import data from '../mocks/data.json';
import { callApi } from './commonUtils';
describe('callApi method', () => {
    it('should call api successfully', (done) => {
        jest.spyOn(axiosInstance, 'axiosInstance').mockImplementation(
            (): any => () => {
                return Promise.resolve({ data: data.results });
            }
        );
        callApi()
            .then((resp) => {
                expect(resp.data.length).toBe(5);
                done();
            })
            .catch((err) => {
                console.error(err);
            });
    });
});
