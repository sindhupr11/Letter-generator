import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Wrapper = styled.div`
    background-color: #FFFFFF;
    border-radius: 5px;
    color: light-pink;
    display: inline-block;
    padding: 30px;
    margin: 0 auto;
`;

export const Title = styled.h1`
    text-align: center;
    font-family: 'Verdana', sans-serif; 
    font-size: 2em; 
    font-weight: bolder; 
`;

export const TextField = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
`;

export const Button = styled.button`
    /* Button styles */
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    color: white;
    border-color: #FF007B;
    background-color: #820300;

    /* Hover animation */
    &:hover {
        background-color: #B80000;
        color: white;
    }

    /* Click animation */
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
