import {styled} from "styled-components";

export const ArticleContainer = styled.article`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    border-radius: 5px;
    box-shadow: 2px 2px 4px rgba(0,0,0, .2);
    color: #252B42;
    width: 30rem;
    gap: 1rem;
`;

export const ContentContainer = styled.div`
    padding-inline: .5rem;
`;

export const TitleArticle = styled.h3`
    font-size:1.2rem
`;

export const textArticle = styled.p`
    font-size: .6rem;
`;

export const PricesContainer = styled.div`
    display: flex;
    align-items: center;
    padding-inline: .5rem;
`;

export const PriceValue = styled.p`
    font-size: 3rem;
    font-weight: 700;
`;

export const PricePlaneContainer = styled.div`

    font-weight: 700;
`;

export const PriceCentsValue = styled.p`
    font-size: 1rem;
`;

export const Pricetxt = styled.p`
    font-size: .7rem;
`;

export const ArticleBtn = styled.button`
    border-radius: 999px;
    background: #38A3F1;
    color: white;
    padding: .8rem 1rem;
    font-size: .7rem;
    border: none;
    transition: all .5s ease-in-out;
    cursor: pointer;

    &:hover{
        transform: scale(110%);
        background: #21618c;
    }
`;
