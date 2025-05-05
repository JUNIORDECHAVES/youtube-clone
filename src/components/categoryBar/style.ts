import styled from "styled-components";

export const CategoryContainer = styled.div<{ isopen: boolean }>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media screen and (min-width: 360px) and (max-width: 791px) {
        justify-content: center;
    }
    `;


export const CategoryWrapper = styled.div`
    margin-top: 20px; 
    margin-bottom: 20px;
    z-index: 0; 
    position: relative; 
`;

export const Container = styled.div<{ isopen: boolean }>`
    display: flex;
    left: 300px; 
    left: ${({isopen}) => isopen ?"300px" : "100px"};
    top: 45px;
    gap: 12px;
    overflow-x: auto;
    max-width: ${({isopen}) => isopen? "calc(100vw - 330px)" : "calc(100vw - 160px)"};
    width: 100%;
    margin-top: 10px;
    padding: 14px 0;
    scroll-behavior: smooth;
    position: fixed; 
    background-color: #fff;

    
    /* Ocultar barra de rolagem */
    ::-webkit-scrollbar {
        display: none;
    }
    scrollbar-width: none;
    -ms-overflow-style: none;

    @media screen and (min-width: 360px) and (max-width: 791px) {
        max-width: calc(100vw - 100px);
        left: 40px;

    }
    @media screen and (min-width: 792px) and (max-width: 872px) {
        max-width: calc(100vw - 300px);
        left: 26%;
    }
`;

export const CategoriaButton = styled.button<{ Selected: boolean }>`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
    font-family: "Roboto", serif;
    background-color: ${({ Selected }) => (Selected ? "#000" : "#e0e0e0")};
    color: ${({ Selected }) => (Selected ? "#fff" : "#000")};
    border: none;
    border-radius: 8px;
    padding: 5px 12px;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;

    white-space: nowrap;

    &:hover {
        background-color: ${({ Selected }) => (Selected ? "#000" : "#d6d6d6")};
    }
`;

export const ScrollButtonWrapper = styled.div<{
    position: "left" | "right";
    show: boolean;
    isopen: boolean;
    }>`
    display: ${({ show }) => (show ? "flex" : "none")};
    position: fixed;
    top: 60px;
    ${({ position, isopen }) => position === "left"? `left: ${isopen ? "280px" : "85px"};` : 
    `right: ${isopen ? "0px;" : "20px"};`}
    z-index: 20;

    @media screen and (min-width: 360px) and (max-width: 791px) {
        ${({ position, isopen }) => position === "left"? "left: 20px;" : 
    "right: 10px;"}
    }
`;



export const ScrollButton = styled.button`
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: black;
    font-size: 24px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: rgba(0, 0, 0, 0.7);
    }
`;
