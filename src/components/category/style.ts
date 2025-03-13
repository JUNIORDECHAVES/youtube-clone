import styled from "styled-components";

export const CategoryContainer = styled.div<{ isopen: boolean }>`
    position: relative;
    display: flex;
    align-items: center;
    
    `;


export const CategoryWrapper = styled.div`
    margin-top: 20px; 
    margin-bottom: 20px;
    z-index: 0; 
    position: relative; 
`;

export const Container = styled.div<{ isopen: boolean }>`
    display: flex;
    gap: 12px;
    overflow-x: auto;
    max-width: calc(100vw - 360px);
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
`;

export const CategoriaButton = styled.button<{ ativa: boolean }>`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
    font-family: "Roboto", serif;
    background-color: ${({ ativa }) => (ativa ? "#000" : "#e0e0e0")};
    color: ${({ ativa }) => (ativa ? "#fff" : "#000")};
    border: none;
    border-radius: 8px;
    padding: 5px 12px;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;

    white-space: nowrap;

    &:hover {
        background-color: ${({ ativa }) => (ativa ? "#000" : "#d6d6d6")};
    }
`;

export const ScrollButtonWrapper = styled.div<{ position: "left" | "right"; show: boolean }>`
    display: flex;
    position: fixed;
    top: 50px;
    ${({ position }) => (position === "left" ? "left: 300px;" : "right: 0px;")}
    display: ${({ show }) => (show ? "flex" : "none")};
    z-index: 20;
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
