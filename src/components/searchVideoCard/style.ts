import styled from "styled-components";


export const ContainerVideoSearch = styled.div`
    display: flex;
    margin-left: 20%;
    border: 1px solid rgba(0, 0, 0, 0.03);
    padding: 20px;
    border-radius: 6px;
    box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.04);
    width: 100%;
`;

export const ImageBanner = styled.img`
    flex-grow: 1;
    width: 100%;
    max-width: 450px;
    max-height: 250px;
    object-fit: cover;
    border-radius: 12px;
`;

export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
`;

export const ChannelContainer = styled.div`
    margin: 10px 0;
    display: flex;
    gap: 10px;
    align-items: center;
`;

export const ChannelImage = styled.div`
    background-color: #000081;
    color: #FFF;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    margin-top: 10px;
`;


export const Title = styled.span`
    font-weight: 600;
    color: #0f0f0f;
    display: -webkit-box;
`;

export const TextCard = styled.span`
    color: #8c8c8c;
    font-size: 14px;
`;

export const Description = styled.span`
    font-weight: 600;
    color: #8c8c8c;
    font-size: 14px;
    display: -webkit-box;
    -webkit-line-clamp: 1; 
    -webkit-box-orient: vertical;
    overflow: hidden;
`;
