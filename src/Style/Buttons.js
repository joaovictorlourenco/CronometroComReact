import styled from "styled-components";

export const DivBtn = styled.div`


    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 1rem;


`; 

const btn = styled.button`

    width: 100px;
    height: 40px;
    border: none;
    border-radius: 10px;
    cursor: pointer;

`;


export const DivContainer = styled(btn)`

    height: 3rem;
    width: 100%;
    background-color: inherit;


`;

export const ResumeButton = styled(btn)`

    background-color: #3C79F5;
    color: #F2DEBA;

`;

export const StartButtonStyle = styled(btn)`

    background-color: #3C79F5;
    color: #F2DEBA;

`;

export const ResetButton = styled(btn)`

    background-color: #2DCDDF;
    color: #F2DEBA;

`;