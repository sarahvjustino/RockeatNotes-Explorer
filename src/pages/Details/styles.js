import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-rows: 6.5rem auto;
    grid-template-areas:
    "header"
    "content";

    width: 100%;
    height: 100vh;
`

export const Links = styled.ul`
    list-style: none;

    > li {
        margin-top: .75rem;
    
        a{
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`