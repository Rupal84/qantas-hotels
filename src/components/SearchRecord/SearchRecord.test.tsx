import { render } from '@testing-library/react';
import { SearchRecord } from './SearchRecord';
import data from '../../mocks/data.json';
jest.mock('../Image', () => {
    return {
        Image: () => <div>Dummy Image Component</div>,
    };
});
jest.mock('../HotelDetails', () => {
    return {
        HotelDetails: (props: any) => (
            <div>Dummy HotelDetails Component {props.children}</div>
        ),
    };
});
jest.mock('../Price', () => {
    return {
        Price: () => <div>Dummy Price Component</div>,
    };
});
jest.mock('../Rating', () => {
    return {
        Rating: () => <div>Dummy Rating Component</div>,
    };
});
describe('SearchRecord component', () => {
    it('should render correctly', () => {
        const { results } = JSON.parse(JSON.stringify(data));
        const { getByText } = render(<SearchRecord hotel={results[0]} />);
        expect(getByText(/Dummy Image Component/i)).toBeInTheDocument();
        expect(getByText(/Dummy HotelDetails Component/i)).toBeInTheDocument();
        expect(getByText(/Dummy Rating Component/i)).toBeInTheDocument();
        expect(getByText(/Dummy Price Component/i)).toBeInTheDocument();
    });
});
