import { styled } from "styled-components";

export const HeroContainer = styled.div`
    width: 100%;
    background-image: url(${(props) => props.$gradient});
    background-position: 0% 100%;
    background-size: cover;
    background-repeat: no-repeat;
`;

export const Hero = styled.div`
    display: flex;
    align-items: center;
`;

export const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: start;
`;

export const HeroImg = styled.img`
    width: 50rem;
`;

export const HeroTitle = styled.h1`
    color: white;
    width: 50%;
    font-size: 2.5rem;
`;

export const HeroParagraph = styled.p`
    color: white;
    font-size: 1rem;
    font-weight: 300;
    width: 50%;
    line-height: 150%;
`;

export const HeroBtn = styled.button`
    padding: 1rem 3rem;
    border-radius: 999px;
    font-size: 22px;
    border: none;
    color: #38A3F1;
    font-weight: 600;
`;
