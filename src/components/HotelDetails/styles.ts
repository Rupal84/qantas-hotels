import styled from 'styled-components';

interface IProps {
    hasCancellation?: boolean;
}

export const Address = styled.p`
    color: darkslategray;
    font-size: medium;
    margin: 0;
`;
export const Name = styled.div`
    color: #e91e63;
    font-size: smaller;
    text-decoration: underline;
    margin-top: ${({ hasCancellation }: IProps) =>
        hasCancellation ? '0' : '20px'};
`;
export const Cancellation = styled.div`
    font-size: medium;
    color: green;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: ${(props: IProps) =>
        props.hasCancellation ? 'space-between' : 'flex-start'};
    width: 419px;
`;

export const TitleWrapper = styled.div`
    display: flex;
`;
export const StyledH3 = styled.h3`
    margin: 0;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
