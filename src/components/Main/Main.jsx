import * as S from "./styles.js"

export const Main = ({children}) => {
    return (
        <S.MainContainer>
            <S.MainTitle>Pricing</S.MainTitle>
            <S.MainText>Most calendars are designed for teams. 
            Slate is designed for freelancers</S.MainText>
            <S.ArticlesContainer>
                {children}
            </S.ArticlesContainer>
        </S.MainContainer>
    )
}