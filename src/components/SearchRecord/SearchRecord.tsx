import { IHotel } from '../../common/types';
import { HotelDetails } from '../HotelDetails';
import { Image } from '../Image';
import { Price } from '../Price';
import { Wrapper } from './styles';

interface ISearchRecord {
    hotel: IHotel;
}

export const SearchRecord = ({ hotel }: ISearchRecord) => {
    const { url, caption } = hotel.property.previewImage;
    const { amount: displayPrice } = hotel.offer.displayPrice;
    const savings = hotel.offer?.savings?.amount;
    const { cancellationOption, name } = hotel.offer;
    const { title, address } = hotel.property;

    return (
        <Wrapper>
            <Image url={url} caption={caption} />
            <HotelDetails
                address={address.toString()}
                name={name}
                title={title}
                cancellation={cancellationOption.cancellationType}
            />
            <Price price={displayPrice} savings={savings} />
        </Wrapper>
    );
};
