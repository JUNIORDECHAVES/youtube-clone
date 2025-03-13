import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./style"

export const VideoComponent = ({videos}:any) => {
    return (
        <Container>
            <ImageBanner src={videos.image} />

            <TitleContainer>
                <ChannelImage>
                    JRCH
                </ChannelImage>
                <TextContainer>
                    <Title>{videos.title}</Title>
                    <TextCard>{videos.channel}</TextCard>
                    <TextCard>{videos.views} de visualizações  há {videos.time}</TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    )
}