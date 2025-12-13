import styled from "styled-components";

export const Container = styled.div`
    display: inline-block;
    position: relative;
`;

export const Button = styled.button`
    border: none;
    font-size: 14px;
    cursor: pointer;
    padding: 10px;
    width: 70px;
    height: 40px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    white-space: nowrap;
    color: #333;
    
    &:hover {
        background-color: #ccc;
        
    }
`;

export const MenuVideo = styled.div`
    position: absolute;
    top: 40px;
    right: 0;
    width: 200px;
    background: white;
    border-radius: 12px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    padding: 8px 0;
    display: flex;
    flex-direction: column;
`;

export const ItemVideo = styled.div`
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

export const IconVideo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    margin-right: 10px;
`;

export const TextVideo = styled.span`
    flex: 1;
    color: #333;
`;
