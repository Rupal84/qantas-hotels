import styled, { css } from 'styled-components';
interface ISavings {
    hasSavings?: boolean;
}
const SavingsStyle = css`
    color: #e91e63;
    font-size: x-large;
    margin: 0;
`;
export const PerNightText = styled.p`
    font-weight: 400;
    color: darkslategray;
    margin: 0;
`;
export const DollarSign = styled.sup`
    font-size: large;
`;
export const Amount = styled.div`
    font-size: xx-large;
    padding-top: 0;
    font-family: sans-seriff;
`;
export const SavingsWrapper = styled.div`
    display: flex;
    margin-top: 5px;
    align-items: flex-start;
`;

export const Savings = styled.div`
    ${SavingsStyle}
`;
export const Approx = styled.div`
    ${SavingsStyle}
    margin-top: -5px;
`;
export const DisplayPrice = styled.div`
    display: flex;
    align-items: flex-start;
`;

export const PriceWrapper = styled.div`
    align-self: ${({ hasSavings }: ISavings) =>
        hasSavings ? 'end' : 'center'};
`;
