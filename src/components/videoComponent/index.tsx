import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./style"

export const VideoComponent = () => {
    return (
        <Container>
            <ImageBanner src="https://i.ytimg.com/vi/eyRIrz8I9OQ/maxresdefault.jpg" />

            <TitleContainer>
                <ChannelImage>
                    JRCH
                </ChannelImage>
                <TextContainer>
                    <Title>Cesar Mc - Ligação Perdida Feat Deus (Videoclipe Oficial)</Title>
                    <TextCard>CESAR MC</TextCard>
                    <TextCard>1,8 mi de visualizações  há 1 ano</TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    )
}