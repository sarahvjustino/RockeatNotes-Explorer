import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    > header{
        width: 100%;
        height: 9rem;

        display: flex;
        align-items: center;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

        padding: 0 7.75rem;

        svg{
            color: ${({ theme }) => theme.COLORS.GRAY_100};
            font-size: 1.5rem;
        }
    }
`

export const Form = styled.form`
    max-width: 21.25rem;
    margin: 1.9rem auto 0;
`