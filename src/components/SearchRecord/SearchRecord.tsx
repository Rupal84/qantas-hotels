import { IHotel } from '../../common/types';
import { HotelDetails } from '../HotelDetails';
import { Image } from '../Image';
import { Price } from '../Price';
import { Rating } from '../Rating';
import { RightContent, Wrapper } from './styles';

interface ISearchRecord {
    hotel: IHotel;
}

export const SearchRecord = ({ hotel }: ISearchRecord) => {
    const { url, caption } = hotel.property.previewImage;
    const { amount: displayPrice } = hotel.offer.displayPrice;
    const savings = hotel.offer?.savings?.amount;
    const { cancellationOption, name } = hotel.offer;
    const { title, address, rating } = hotel.property;
    const { ratingType, ratingValue } = rating;
    return (
        <Wrapper>
            <Image url={url} caption={caption} />
            <RightContent>
                <HotelDetails
                    address={address.join(', ')}
                    name={name}
                    title={title}
                    cancellation={cancellationOption.cancellationType}
                >
                    <Rating rating={ratingValue} ratingType={ratingType} />
                </HotelDetails>
                <Price price={displayPrice} savings={savings} />
            </RightContent>
        </Wrapper>
    );
};
