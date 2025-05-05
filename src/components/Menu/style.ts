import styled from "styled-components";

export const Container = styled.div<{ openMenu: boolean }>`
    display: flex;
    min-width: ${({ openMenu }) => openMenu ? "250px" : '80px'};
    flex: 1;
    height: calc(100vh - 55px);
    box-sizing: border-box;
    padding: 10px 0;
    align-items: center;
    flex-direction: column;
    overflow-y: auto;
    position: sticky;
    top: 55px;
    z-index: 2;

    @media screen and (min-width: 360px) and (max-width: 791px){
    display: ${({ openMenu }) => openMenu ? "flex" : 'none'};
    position: fixed;
    top: 55px;
    left: 0;
    background: #fff;
    width: ${({ openMenu }) => openMenu ? "200px" : '80px'};
    }

    @media screen and (min-width: 791px) and (max-width: 1312px) {
    position: fixed;
    top: 55px;
    left: 0;
    background: #fff;
    width: ${({ openMenu }) => openMenu ? "200px" : '80px'};
    }
`;

export const ContainerFundo = styled.div<{ openMenu: boolean }>`

    @media screen and (min-width: 360px) and (max-width: 1312px){

        display: ${({ openMenu }) => (openMenu ? "block" : "none")};
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.5); /* Opacidade no fundo */
        z-index: 1;
    }
`;


export const MenuItem = styled.div<{ openMenu: boolean }>`
    white-space: nowrap;
    width: 80%;
    min-height: ${({ openMenu }) => openMenu ? "40px" : '60px'};
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
    width: 24px;
    

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
    margin-left: ${({ openMenu }) => openMenu ? "20px" : '0'};
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