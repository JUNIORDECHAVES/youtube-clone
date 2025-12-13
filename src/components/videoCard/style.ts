import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    cursor: pointer;
`;

export const ImageBanner = styled.img`
    width: 100%;
    max-height: 220px;
    
    border-radius: 12px;
`;

export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
`;

export const ChannelImage = styled.div`
    background-color: #000081;
    color: #FFF;
    min-width: 36px;
    max-height: 36px;
    border-radius: 50%;
    display: flex;
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
    display: -webkit-box;
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

export const TextCard = styled.span`
    color: #8c8c8c;
    font-size: 14px;
`;