import styled from 'styled-components';

export const Form = styled.form`
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
`;

export const Button = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    color: white;
    border-color: #FF007B;
    background-color: #820300;

    &:hover {
        background-color: #B80000;
        color: white;
    }

    &:active {
        transform: scale(0.95);
    }
`;

export const TextArea = styled.div`
    width: 100%;
    height: 200px;
    padding: 10px;
    margin-top: 10px;
    border-radius: 10px;
    border: 1px solid black;
    overflow: auto;
    font-family: 'Verdana', sans-serif;
    font-size: 1em; 
    font-weight: normal;
    color: black;
`;
