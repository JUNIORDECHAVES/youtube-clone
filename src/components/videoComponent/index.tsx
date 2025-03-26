import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./style"

export const VideoComponent = ({videos}:any) => {
    return (
        <Container>
            <ImageBanner src={videos.image} />

            <TitleContainer>
                <ChannelImage>
                    JR
                </ChannelImage>
                <TextContainer>
                    <Title title={videos.title} >{videos.title}</Title>
                    <TextCard title={videos.channel}>{videos.channel}</TextCard>
                    <TextCard>{videos.views} de visualizações  há {videos.time}</TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    )
}