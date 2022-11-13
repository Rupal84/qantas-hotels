import { act, getByLabelText, render, waitFor } from '@testing-library/react';
import App from './App';
import * as apiUtils from './utils/apiUtils';
import data from './mocks/data.json';
import { IHotel } from './common/types';

jest.mock('./components/SearchRecord', () => {
    return {
        SearchRecord: () => <div>Dummy Search Component</div>,
    };
});
describe('App component', () => {
    const sampleResponse: { results: IHotel[] } = JSON.parse(
        JSON.stringify(data)
    );
    beforeEach(() => {
        jest.spyOn(apiUtils, 'callApi').mockResolvedValue({
            data: sampleResponse.results,
        });
    });
    afterEach(() => {
        jest.restoreAllMocks();
    });
    it('renders correctly', async () => {
        const { getAllByText } = render(<App />);
        const numberOfElements = await waitFor(() => {
            return getAllByText(/dummy search component/i).length;
        });
        expect(numberOfElements).toBe(5);
    });
});
