import { fireEvent, render, waitFor } from '@testing-library/react';
import App from './App';
import * as apiUtils from './utils/commonUtils';
import data from './mocks/data.json';
import { IHotel } from './common/types';

jest.mock('./components/SearchRecord', () => {
    return {
        SearchRecord: (props: any) => (
            <div>
                Dummy SearchRecord Component -{' '}
                {props.hotel.offer.displayPrice.amount}
            </div>
        ),
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
            return getAllByText('dummy SearchRecord component', {
                exact: false,
            }).length;
        });
        expect(numberOfElements).toBe(5);
    });
    it('should change default sorting', async () => {
        const { getByLabelText, getAllByText } = render(<App />);
        const sortedL2H = await waitFor(() => {
            return getAllByText('dummy searchrecord component', {
                exact: false,
            });
        });
        expect(sortedL2H[0].textContent).toContain('227');
        const select = getByLabelText(/sort by/i);
        fireEvent.change(select, { target: { value: 'h2l' } });
        const sortedH2L = await waitFor(() => {
            return getAllByText('dummy searchrecord component', {
                exact: false,
            });
        });

        expect(sortedH2L[0].textContent).toContain('535');
    });
});
