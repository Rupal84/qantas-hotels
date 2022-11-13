import { render } from '@testing-library/react';
import { HotelDetails } from './HotelDetails';
describe('HotelDetails component', () => {
    it('should render correctly', () => {
        const { getByText } = render(
            <HotelDetails
                title={'Awesome Hotel'}
                name={'Deluxe room'}
                address={'penrose, sydney'}
                cancellation={'FREE_CANCELLATION'}
            >
                <div>Price</div>
            </HotelDetails>
        );
        expect(getByText(/Free cancellation/i)).toBeInTheDocument();
        expect(getByText(/penrose, sydney/i)).toBeInTheDocument();
        expect(getByText(/Awesome Hotel/i)).toBeInTheDocument();
        expect(getByText(/Price/i)).toBeInTheDocument();
    });
});
