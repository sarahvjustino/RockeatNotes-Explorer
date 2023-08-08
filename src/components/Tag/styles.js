import styled from "styled-components";

export const Container = styled.span`
    font-size: .75rem;
    padding: .31rem .88rem;
    border-radius: 5px;
    margin-right: .38rem;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
`