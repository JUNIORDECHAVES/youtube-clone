import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: #F8F9FA;
`;

export const RegistrationForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    width: 350px;
`;

export const LogoImage = styled.img`
    width: 50px;
    height: 50px;
`;

export const Title = styled.h2`
    color: #000;
    font-size: 22px;
    margin-bottom: 5px;
`;

export const Subtitle = styled.p`
    color: #5F6368;
    font-size: 14px;
    margin-bottom: 20px;
`;

export const InputContainer = styled.div`
    width: 100%;
    position: relative;
    margin-bottom: 20px;
`;

export const InputContainerPassword = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 20px;
    white-space: nowrap;
`;

export const Input = styled.input`
    width: 100%;
    padding: 14px 10px 6px; 
    border: 1px solid #DADCE0;
    border-radius: 4px;
    font-size: 16px;
    transition: border-color 0.3s ease;
    

    &:focus {
        border-color: #1A73E8;
        outline: none;
    }
    
`;

export const Label = styled.label<{ isActive: boolean }>`
    position: absolute;
    left: 10px;
    top: ${({ isActive }) => (isActive ? "-10px" : "50%")};
    background-color: ${({ isActive }) => (isActive ? "white" : "transparent")};
    padding: 0 5px;
    transform: ${({ isActive }) => (isActive ? "scale(0.8)" : "translateY(-50%)")};
    font-size: ${({ isActive }) => (isActive ? "12px" : "16px")};
    color: ${({ isActive }) => (isActive ? "#1A73E8" : "#5F6368")};
    transition: all 0.3s ease;
    pointer-events: none;
`;

export const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #1A73E8;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    &:hover {
        background-color: #135ABE;
    }

    &:disabled {
        background-color: #C4C4C4;
        cursor: not-allowed;
    }
    `
;
