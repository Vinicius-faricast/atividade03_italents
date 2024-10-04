import * as S from "./style";
import heroImg from "./../../assets/heroImg.png";
import gradient from "./../../assets/Gradient.svg";

export const Hero = () => {
    return(
        <S.HeroContainer $gradient={gradient} >
            <S.Hero>
                <S.HeroImg src={heroImg}/>
                <S.HeroContent>
                <S.HeroTitle>We focus on ergonomics </S.HeroTitle>
                <S.HeroParagraph>Most calendars are designed for teams. Slate is designed for freelancers</S.HeroParagraph>
                <S.HeroBtn>Try For Free</S.HeroBtn>
                </S.HeroContent>
            </S.Hero>
        </S.HeroContainer>
    )
}