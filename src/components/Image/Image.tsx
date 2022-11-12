import { ImageWrapper } from './styles';

interface IPropsImage {
    url: string;
    caption: string;
}
export const Image = ({ url, caption }: IPropsImage) => {
    return (
        <ImageWrapper>
            {' '}
            <img src={url} alt={caption} height={'140'} />
        </ImageWrapper>
    );
};
