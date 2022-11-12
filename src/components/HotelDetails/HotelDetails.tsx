import {
    Address,
    Cancellation,
    Name,
    Wrapper,
    TitleWrapper,
    StyledH3,
} from './styles';

interface IHotelDetails {
    title: string;
    address: string;
    cancellation: string;
    name: string;
    children?: React.ReactNode;
}
export const HotelDetails = ({
    title,
    name,
    address,
    cancellation,
    children,
}: IHotelDetails) => {
    const hasCancellation = cancellation === 'FREE_CANCELLATION';
    return (
        <Wrapper hasCancellation={hasCancellation}>
            <div>
                <TitleWrapper>
                    <StyledH3>{title}</StyledH3>
                    {children}
                </TitleWrapper>
                <Address>{address}</Address>
            </div>
            <Name hasCancellation={hasCancellation}>{name}</Name>
            {hasCancellation && <Cancellation>Free cancellation</Cancellation>}
        </Wrapper>
    );
};
