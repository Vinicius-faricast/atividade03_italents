import * as S from "./stile";

export const Article = (props) => {
    const {title, textArticle, price} = props.content;
    return (
        <S.ArticleContainer>
            <S.ContentContainer>
                <S.TitleArticle>{title}</S.TitleArticle>
                <S.textArticle>{textArticle}</S.textArticle>
            </S.ContentContainer>
            <S.PricesContainer>
                <S.PriceValue>{price}</S.PriceValue>
                <S.PricePlaneContainer>
                    <S.PriceCentsValue>,00</S.PriceCentsValue>
                    <S.Pricetxt>Per Month</S.Pricetxt>
                </S.PricePlaneContainer>
            </S.PricesContainer>
            <S.ArticleBtn>Order Now</S.ArticleBtn>
        </S.ArticleContainer>
    )
}