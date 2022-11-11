import { Address, Cancellation, Name, Title } from './styles';

interface IHotelDetails {
    title: string;
    address: string;
    cancellation: string;
    name: string;
}
export const HotelDetails = ({
    title,
    name,
    address,
    cancellation,
}: IHotelDetails) => {
    return (
        <div>
            <Title>{title}</Title>
            <Address>{address}</Address>
            <Name>{name}</Name>
            {cancellation && <Cancellation>{cancellation}</Cancellation>}
        </div>
    );
};
