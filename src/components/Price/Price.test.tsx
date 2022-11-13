import { render } from '@testing-library/react';
import { Price } from './Price';
describe('Price component', () => {
    it('should render correctly', () => {
        const { getByText } = render(<Price price={350} savings={20} />);
        expect(getByText(/350/i)).toBeInTheDocument();
        expect(getByText(/20/i)).toBeInTheDocument();
    });
});
