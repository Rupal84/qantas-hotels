import styled, { css } from 'styled-components';

const SavingsStyle = css`
    color: red;
    font-size: x-large;
    margin: 0;
`;
export const PerNightText = styled.p`
    font-weight: 500;
    color: darkslategray;
    margin: 0;
`;
export const DollarSign = styled.div`
    padding: 4px 8px 0 0;
    font-size: large;
`;
export const Amount = styled.div`
    font-size: xx-large;
    padding-top: 0;
    font-family: sans-seriff;
`;
export const SavingsWrapper = styled.div`
    display: flex;
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
    height: 200px;
`;
