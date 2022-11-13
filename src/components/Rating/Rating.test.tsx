import { render } from '@testing-library/react';
import { Rating } from './Rating';
import * as Icons from '@iconify/react';

jest.mock('@Iconify/react', () => {
    return {
        Icon: (props: any) => <div {...props}>{props.icon}</div>,
    };
});
describe('Rating component', () => {
    it('should render correctly for star ratings', () => {
        const { getAllByText } = render(
            <Rating rating={1.5} ratingType={'star'} />
        );
        expect(getAllByText(/ion:star-outline/i).length).toBe(3);
        expect(getAllByText(/ion:star-half/i).length).toBe(1);
        expect(getAllByText('ion:star').length).toBe(1);
    });
    it('should render correctly for self ratings', () => {
        const { getAllByText } = render(
            <Rating rating={1.5} ratingType={'self'} />
        );
        expect(getAllByText(/ion:ellipse-sharp/i).length).toBe(1);
        expect(getAllByText(/ion:contrast-outline/i).length).toBe(1);
        expect(getAllByText(/ion:ellipse-outline/i).length).toBe(3);
    });
});
