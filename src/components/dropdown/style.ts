import styled from "styled-components";

export const DropdownContainer = styled.div`
    position: relative;
    display: inline-block;
`;

export const DropdownButton = styled.button<{ $backgroundImage?: string }>`
    background: ${({ $backgroundImage }) => $backgroundImage ? `center / cover no-repeat ${$backgroundImage}` : "none"};
    border: none;
    font-size: 20px;
    cursor: pointer;
    padding: 10px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    text-transform: uppercase;
    color: ${({ $backgroundImage }) => $backgroundImage ? "transparent" : "#333"};
    
    &:hover {
        background-color: ${({ $backgroundImage }) => $backgroundImage ? "transparent" : "#ccc"};
        
    }
`;


export const DropdownMenu = styled.div`
    position: absolute;
    top: 40px;
    right: 0;
    width: 280px;
    background: white;
    border-radius: 12px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    padding: 8px 0;
    display: flex;
    flex-direction: column;
`;

export const DropdownItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 8px;
    transition: background 0.3s;
    font-size: 14px;

    &:hover {
        background: #f1f1f1;
    }
`;

export const DropdownIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    margin-right: 10px;
`;

export const DropdownText = styled.span`
    flex: 1;
    color: #333;
`;

export const DropdownRightIcon = styled.div`
    font-size: 14px;
    color: #888;
`;

export const Divider = styled.hr`
    border: none;
    height: 1px;
    background: #ddd;
    margin: 5px 0;
`;

