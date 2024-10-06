import {styled} from 'styled-components';

export const FormContact = styled.form`
    max-width: 80%;
    width: 23rem;
    padding-block: 4rem;
    border-radius: 1rem;
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 2rem;
    margin: 0 auto;
`;

export const InputName = styled.input`
    background: #F5F5F5;
    border: 1px solid #E8E8E8;
    border-radius: 1rem;
    padding: .5rem 2rem;
    outline: none;

`;

export const InputEmail = styled.input`
    background: #F5F5F5;
    border: 1px solid #E8E8E8;
    border-radius: 1rem;
    padding: .5rem 2rem;
    outline: none;
`;

export const TextArea = styled.textarea`
    background: #F5F5F5;
    border: 1px solid #E8E8E8;
    border-radius: .5rem;
    padding: .5rem 2rem;
    outline: none;
`;

export const FormBtn = styled.button`
    background: #EF2779;
    border: 1px solid #E8E8E8;
    border-radius: 1rem;
    padding: .5rem 2rem;
    outline: none;
    cursor: pointer;
    color: white;
    transition: all .5s ease-in-out;

    &:hover{
        transform: scale(110%);
        background: #B50C51;
    }
`;