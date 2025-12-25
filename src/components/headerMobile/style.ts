import styled from "styled-components";


export const ContainerHeaderMobile = styled.header`
    width: 100%;
    height: 55px;
    background-color: #fff;
    padding: 0 16px;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 2;
    @media screen and (min-width: 360px) and (max-width: 768px) {
        display: flex;
    }
    @media (min-width: 769px) {
        display: none;
    }
`;

export const ContainerContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
`;

export const ContentSearch = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 8px;
    border-radius: 50%;

        &:hover{
            background-color:  #f2f2f2;
        }
`;

export const ButtonSearchImg = styled.img`
    height: 20px;
    
`;

export const LogoImg = styled.img`
    height: 60px;
    cursor: pointer;
`;