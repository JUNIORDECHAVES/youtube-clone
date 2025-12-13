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
`;

export const InputContent = styled.div`
    width: 100%;
    margin-bottom: 10px;
`;

export const InputContainerPassword = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
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

export const ContainerInputCheckbox = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
`;

export const InputCheckbox = styled.input`
    display: inline-block;
    width: 1rem;
    height: 1rem;
    margin-right: 10px;
`;

export const LabelCheckbox = styled.label`
    display: inline-block;
`;

export const MsgError = styled.span`
    color: red;
    font-size: 12px;
    margin-top: 5px;
    margin-left: 5px;
    margin-bottom: 10px;
    display: block;
    font-weight: bold;
`;

interface LabelProps {
    isActive?: boolean;
}

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
