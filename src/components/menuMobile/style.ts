import styled from "styled-components";

export const Container = styled.div`
    display: none;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background: #fff;
    border-top: 1px solid #e5e5e5;
    z-index: 10;

    @media screen and (max-width: 791px) {
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 8px 0;
        box-sizing: border-box;
    }
`;

export const MenuItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
    user-select: none;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: #f2f2f2;
    }

    &:active {
        background-color: #e5e5e5;
    }
`;

export const TextLabel = styled.span`
    font-size: 10px;
    font-weight: 500;
    color: #030303;
    text-align: center;
    line-height: 1;
`;
