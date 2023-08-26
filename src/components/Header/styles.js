import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
    grid-area: header;

    height: 6.5rem;
    width: 100%;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-between;

    padding: 0 5rem;
`

export const Profile = styled(Link)`
    display: flex;
    align-items: center;
    gap: 1rem;

    > img {
        height: 3.5rem;
        width: 3.5rem;
        border-radius: 50%;
    }

    > div{
        display: flex;
        flex-direction: column;
        line-height: 1.5rem;

        span{
            font-size: .9rem;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }

        strong{
            font-size: 1.12rem;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`

export const Logout = styled.button`
    border: none;
    background: none;

    > svg {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 2.25rem;
    }
`