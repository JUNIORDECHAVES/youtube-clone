import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`;

export const ImageBanner = styled.img`
    width: 100%;
    height: 450px;
    border-radius: 12px;
`;

export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
`;


export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;


export const Title = styled.span`
    font-weight: 600;
    color: #0f0f0f;
    
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
   -webkit-line-clamp: 2; /* number of lines to show */
        line-clamp: 2;
    -webkit-box-orient: vertical;
`;

export const TextCard = styled.span`
    color: rgb(96, 96, 96);
    font-size: 14px;
`;