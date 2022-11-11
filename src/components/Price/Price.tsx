import {
    Amount,
    DisplayPrice,
    DollarSign,
    PerNightText,
    Savings,
    PriceWrapper,
    SavingsWrapper,
    Approx,
} from './styles';

interface IPrice {
    price: number;
    savings?: number;
}
export const Price = ({ price, savings }: IPrice) => {
    return (
        <PriceWrapper>
            <PerNightText>1 night total (AUD)</PerNightText>
            <DisplayPrice>
                <DollarSign>$</DollarSign>
                <Amount>{`${price}`}</Amount>
            </DisplayPrice>
            {savings && (
                <SavingsWrapper>
                    <Savings>Save ${savings}</Savings>
                    <Approx>~</Approx>
                </SavingsWrapper>
            )}
        </PriceWrapper>
    );
};
