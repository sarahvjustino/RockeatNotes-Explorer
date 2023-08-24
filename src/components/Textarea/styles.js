import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 9.38rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.WHITE};
    border: none;
    resize: none;

    margin-bottom: .5rem;
    border-radius: .63rem;
    padding: 1rem;

    &::placeholder{
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
`