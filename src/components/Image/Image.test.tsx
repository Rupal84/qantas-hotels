import { render } from '@testing-library/react';
import { Image } from './Image';
describe('Image component', () => {
    it('should render correctly', () => {
        const { getByAltText } = render(
            <Image url={''} caption={'dummy image'} />
        );
        expect(getByAltText(/dummy image/i)).toBeInTheDocument();
    });
});
