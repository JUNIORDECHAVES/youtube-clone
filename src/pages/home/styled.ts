import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    `;

export const SectionCategory = styled.div`
    position: sticky;
`;

export const Sectioncontent = styled.div`
    width: 100%;
`;

export const VideoContainer = styled.div<{ openMenu: boolean }>`
    width: 100%;
    max-width: 1800px;
    margin-top: 50px; 
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    
    /* display: grid;
    grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
    column-gap: 20px;
    row-gap: 50px;
    */
    `;

export const ShortsContainer = styled.div`
display: flex;
flex-direction: column;
gap: 30px;
`;

export const ShortsContent = styled.div`
    width: 100%;
    max-width: 1600px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    column-gap: 20px;
    row-gap: 50px;
    `;


export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const LogoShorts = styled.img`
    width: 24px;
    height: 24px;
    color: red;
`;

export const Title = styled.span`
    color: #000;
    font-size: 20px;
    font-weight: bold;
`;