import styled from "styled-components";


export const General = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    gap: 1rem;

`;

const btn = styled.button`

    width: 100px;
    height: 20px;
    border: none;
    border-radius: 10px;
    cursor: pointer;


`;


export const ResumeButton = styled(btn)`

    background-color: red;
    color: white;


`;

export const ResetButton = styled(btn)`

    background-color: brown;
    color: white;

`;