import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media screen and (min-width: 360px) and (max-width: 872px) {
        align-items: center;
    }
    `;

export const SectionCategory = styled.div`
    position: fixed;
    top: 50px;
    height: 60px;
    width: 100%;
    background-color: white;
`;

export const Sectioncontent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 360px) and (max-width: 679px) {
        width: 90%;
    }
    @media screen and (min-width: 680px) and (max-width: 791px) {
        width: 80%;
    }
    @media screen and (min-width: 792px) and (max-width: 872px) {
        margin-left: 80px;
        width: calc(100% - 40%);
    }
    @media screen and (min-width: 873px) and (max-width: 1248px) {
        margin-left: 80px;
        width: calc(100% - 80px);
    }

    @media screen and (min-width: 1249px) and (max-width: 1312px) {
        margin-left: 80px;
        width: calc(100% - 80px);
    }

    @media screen and (min-width: 1313px) and (max-width: 1416px) {
        margin-left: 8px;
        width: calc(100% - 30px);
    }
`;

export const VideoContainer = styled.div<{ openMenu: boolean }>`
    width: 100%;
    max-width: 1800px;
    margin-top: 50px; 
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 50px;
    
    @media screen and (min-width: 360px) and (max-width: 872px) {
        grid-template-columns: repeat(1, 1fr);
        
    }
    
    @media screen and (min-width: 873px) and (max-width: 1248px) {
        grid-template-columns: repeat(2, 1fr);
    }
    
    @media screen and (min-width: 1249px) and (max-width: 1312px) {
        grid-template-columns: repeat(3, 1fr);
    }


    @media screen and (min-width: 1313px) and (max-width: 1416px) {
        grid-template-columns: ${({openMenu}) => openMenu ? "repeat(2, 1fr)" : "repeat(3, 1fr)"};
        
    }
    @media screen and (min-width: 1417px) and (max-width: 1624px) {
        grid-template-columns: repeat(3, 1fr);
        
    }
    @media screen and (min-width: 1984px) and (max-width: 2359px) {
        grid-template-columns: repeat(5, 1fr);
        
    }
    @media screen and (min-width: 2360px){
        grid-template-columns: repeat(6, 1fr);
        
    }
    `;

export const ShortsContainer = styled.div`
display: flex;
margin-top: 40px;
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

    @media screen and (min-width: 360px) and (max-width: 872px) {
        grid-template-columns: repeat(2, 1fr);
        
    }
    @media screen and (min-width: 873px) and (max-width: 1416px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (min-width: 1417px) and (max-width: 1792px) {
        grid-template-columns: repeat(5, 1fr);
    }
    `;


export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 20px;
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