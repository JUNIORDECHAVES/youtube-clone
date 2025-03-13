import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    flex: 1 1 calc(25% - 20px);
    max-width: calc(25% - 10px);
    @media screen and (min-width: 420px) and (max-width: 900px) {
        flex: 1 1 calc(100% - 20px);
        max-width: calc(90% - 20px);
    }

    @media screen and (min-width: 900px) and (max-width: 1221px) {
        flex: 1 1 calc(50% - 20px);
        max-width: calc(50% - 10px);
    }

    @media screen and (min-width: 1221px) and (max-width: 1580px) {
        flex: 1 1 calc(33% - 20px);
        max-width: calc(33% - 10px);
    }
`;

export const ImageBanner = styled.img`
    width: 100%;
    height: 210px;
    border-radius: 12px;
`;

export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
`;

export const ChannelImage = styled.div`
    background-color: red;
    width: 40px;
    height: 40px;
    display: flex;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;


export const Title = styled.span`
    font-weight: 600;
    color: #0f0f0f;
`;

export const TextCard = styled.span`
    color: #8c8c8c;
    font-size: 14px;
`;