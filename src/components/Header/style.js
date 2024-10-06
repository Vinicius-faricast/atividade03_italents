import { styled } from "styled-components";

export const Header = styled.header`
    width: 100%;
    background: linear-gradient(to right bottom, #EF2779, #7834BE);
`;

export const Navbar = styled.nav`
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block: 1rem;
`;

export const BrandHeader = styled.h1`
    color: white;
    font-size: 2.4rem;
`;

export const BtnHeader = styled.button`
    padding: 1rem;
    border-radius: 2rem;
    border: none;
    font-size: 1.2rem;
    font-weight: 300;
    color: #EF2779;
    cursor: pointer;
    transition: all .5s ease-in-out;

    &:hover{
        color: #7834BE;
        background: rgb(220,220,220);
        box-shadow: 1px 1px 2px rgba(0, 0, 0, .4);
    }

`;