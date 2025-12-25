import styled from "styled-components";

export const DropdownContainer = styled.div`
    position: relative;
    display: inline-block;
`;

export const DropdownButton = styled.button<{ isLogin: boolean}>`
    border: none;
    background-color: ${({ isLogin}) => isLogin ? 'rgba(128, 0, 128, 0.8)' : 'rgba(216, 216, 216, 0.6)'};

    cursor: pointer;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-size: 1em;
    font-weight: bolder;
    
    
    

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

