import styled from 'styled-components';

interface IProps {
    hasCancellation?: boolean;
}

export const Address = styled.p`
    color: darkslategray;
    font-size: large;
    margin: 0;
`;
export const Name = styled.div`
    color: #e91e63;
    text-decoration: underline;
    margin-top: ${({ hasCancellation }: IProps) =>
        hasCancellation ? '0' : '20px'};
`;
export const Cancellation = styled.div`
    font-size: large;
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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
