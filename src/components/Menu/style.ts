import styled from "styled-components";

export const Container = styled.div<{ openMenu: boolean }>`
    display: flex;
    min-width: ${({ openMenu }) => openMenu ? "250px" : '100px'};
    flex: 1;
    height: calc(100vh - 55px);
    box-sizing: border-box;
    padding: 10px;
    align-items: center;
    flex-direction: column;
    overflow-y: auto;
    position: sticky;
    top: 55px;
`;

export const MenuItem = styled.div<{ openMenu: boolean }>`
    width: 98%;
    min-height: ${({ openMenu }) => openMenu ? "40px" : '70px'};
    border-radius: 10px;
    cursor: pointer;
    padding: 2px 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction: ${({ openMenu }) => openMenu ? "row" : 'column'};
    align-items: center;
    justify-content: ${({ openMenu }) => openMenu ? "flex-start" : 'center'};

    &:hover{
        background-color: #f2f2f2;
    }
`;

export const ButtonIcon = styled.img`
    width: 25px;
    

`;

export const Title = styled.span`
    width: 90%;
    font-weight: 600;
    font-size: 17px;
    text-align: left;
    padding-left: 20px;
`;

export const TextPrincipal = styled.span<{ openMenu: boolean }>`
    font-weight: ${({ openMenu }) => openMenu ? "500" : '400'};
    margin-left: ${({ openMenu }) => openMenu ? "20px" : 'none'};
    font-size: ${({ openMenu }) => openMenu ? "16px" : '12px'};
`;

export const TextSecundario = styled.span`
    font-weight: 400;
    font-size: 16px;
    margin-left: 20px;
`;

export const Separator = styled.div`
    width: 100%;
    height: 1px;
    background-color: #e5e5e5;
    margin: 10px 0;
`;