import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 8px 0;
    background-color: transparent;
    border: 1px solid #e0e0e0;
    border-radius: 24px ;
    width: 150px;
    white-space: nowrap;
    color: #1a73e8;

    &:hover{
        background-color: #E8F3FF;
        cursor: pointer;
    }
    span{
        color: #1a73e8;
        font-weight: 600;
        font-size: 14px;
        }
`;

