import styled from "styled-components";

export const Container = styled.div<{ openMenu: boolean }>`
    display: flex;
    width: ${({ openMenu }) => openMenu ? "250px" : '100px' };
    height: calc(100vh - 55px);
    box-sizing: border-box;
    padding: 10px 10px 10px 10px;
    align-items: center;
    flex-direction: column;
    overflow-y: auto;
    position: sticky;
    top: 55px;
`;

export const MenuItem = styled.div<{openMenu: boolean}>`
    width: 98%;
    min-height: ${({ openMenu }) => openMenu ? "40px" : '70px' };
    border-radius: 10;
    cursor: pointer;
    padding: 2px 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction: ${({ openMenu }) => openMenu ? "row" : 'column' };
    align-items: center;
    justify-content: ${({ openMenu }) => openMenu ? "none" : 'center' };

    &:hover{
        background-color: #f2f2f2;
    }

    span{
        font-weight: ${({ openMenu }) => openMenu ? "600" : '400' };
        margin-left: ${({ openMenu }) => openMenu ? "20px" : 'none' };
        font-size: ${({ openMenu }) => openMenu ? "16px" : '12px' };
    }
`;

export const ButtonIcon = styled.img`
    width: 25px;
    

`; 