import * as S from './styles';

export const Aside = ({children}) => {
    return(
        <S.AsideContainer>
            <S.AsideTitle>Contact Us</S.AsideTitle>
            <S.AsideText>Most calendars are designed for teams. 
            Slate is designed for freelancers</S.AsideText>
            {children}
        </S.AsideContainer>
    )
}