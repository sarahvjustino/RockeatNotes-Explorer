import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 6.6rem auto;
    grid-template-areas: 
    "header"
    "content";
`

export const Form = styled.form`
    max-width: 34.38rem;
    margin: 2.38rem auto;

    > header{
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-bottom: 2.25rem;

        a{
            font-size: 1.25rem;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
    }

`