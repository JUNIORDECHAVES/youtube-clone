import styled from "styled-components";

export const Container = styled.header`
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
    min-width: 40px;
    min-height: 40px;
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
    max-width: 20px;

`; 


export const SearchContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-left: 10px;
`;

export const SearchInputContainer = styled.div`
    flex-grow: 1;
    max-width: 600px;
    height: 35px;
    border: 1px solid #d3d3d3;
    border-radius: 40px 0 0 40px;
    display: flex;
    align-items: center;
    padding: 0 16px;

    @media screen and (min-width: 360px) and (max-width: 550px) {
        display: none;
    }
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

    @media screen and (min-width: 360px) and (max-width: 550px) {
        border-radius: 50%;
        border: none;
        background-color: transparent;
        height: 40px;
        width: 40px;

        &:hover {
            background-color: #f2f2f2;
        }
    }
`;

export const HeaderButton = styled.div`
    width: 200px;
    display: flex;
    
    @media screen and (min-width: 360px) and (max-width: 470px) {
        width: 30px;
        height: 30px;
        border: 1px solid #f2f2f2;
        border-radius: 50%;
        align-items: center;
    }
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
    @media screen and (min-width: 360px) and (max-width: 470px) {
        justify-content: center;
        padding: 0;
    }
`;
