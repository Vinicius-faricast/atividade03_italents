import { useState } from 'react';
import * as S from './styles';

export const Form = () => {
    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [textValue, setTextValue] = useState('')

    const handleName = (e) => {
        setNameValue(e.target.value)
    }

    const handleEmail = (e) => {
        setEmailValue(e.target.value);
    }

    const handleText = (e) => {
        setTextValue(e.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        alert(`Olá ${nameValue}, sua mensagem foi enviada com sucesso!`);

        setNameValue('')
        setEmailValue('')
        setTextValue('')
    }

    return (
        <S.FormContact onSubmit={(e) => handleSubmit(e)}>
            <S.InputName type="text" required onChange={(e) => handleName(e)} value={nameValue} placeholder='Your name'/>
            <S.InputEmail type="email" onChange={(e) => handleEmail(e)} value={emailValue} placeholder='Your e-mail'/>
            <S.TextArea rows="4" cols="20"  onChange={(e) => handleText(e)} value={textValue} placeholder='Your message'/>
            <S.FormBtn>Send</S.FormBtn>
        </S.FormContact>
    );
}