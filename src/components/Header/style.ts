import styled from "styled-components";

export const Conteiner = styled.header`
    width: 100%;
    height: 55px;
    background-color: #fff;
    padding: 0 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 2;
`;

export const LogoConteiner = styled.div`
    display: flex;
    align-items: center;
`;

export const ButtonContainer = styled.div<{ margin?: string }>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: ${({margin}) => margin ? margin : 0 };
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover{
        background-color:  #f2f2f2;
    }
`;

export const ButtonIcon = styled.img`
    width: 20px;
    

`; 


export const SearchContainer = styled.div`
    display: flex;
`;

export const SearchInputContainer = styled.div`
    width: 450px;
    height: 35px;
    border: 1px solid #d3d3d3;
    border-radius: 40px 0 0 40px;
    display: flex;
    align-items: center;
    padding: 0 16px;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 25px;
    outline: none;
    border: none;
`;

export const SearchButton = styled.div`
    border-radius: 0 40px 40px 0;
    height: 35px;
    width: 70px;
    background-color: #f8f8f8;
    border: 1px solid #d3d3d3;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const HeaderButton = styled.div`
    width: 200px;
    display: flex;
    
`

export const Button = styled.button`
    width: 80px;
    border: none;
    background-color: transparent;
    outline: none;

    &:hover{
        color: blue;
        cursor: pointer;
    }
`;

export const ConteinerConfig = styled.div`
    width: 40px;
    height: 40px;
    
    display: flex;
    align-items: center;
    padding-right: 20px;
`;

export const ConfigIcon = styled.img`
    width: 25px;
    height: 25px;
`;