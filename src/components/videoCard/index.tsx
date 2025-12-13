import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./style"
import { PropsVideos } from "../../pages/home"

interface PropsVideo {
    videos: PropsVideos
}

export const VideoCard = ({ videos }: PropsVideo) => {

    function formatViewCount(view: number) {

        if (view >= 1000000000) {
            return `${(view / 1000000000).toFixed(0)} bi de visualizações há`
        } else if (view >= 1000000) {
            return `${(view / 1000000).toFixed(0)} mi de visualizações há`
        } else if (view >= 1000) {
            return `${(view / 1000).toFixed(0)} mil de visualizações há`
        } else {
            return `${view} ${view === 1 ? "visualização" : "visualizações"}`;
        }


    }

    function timeAgo(dateISO: string): string {
        const date = new Date(dateISO);
        const now = new Date();
        const diffMs = now.getTime() - date.getTime();
        
        const seconds = Math.floor(diffMs / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30);
        const years = Math.floor(months / 12);

        if (years >= 1) {
            return `há ${years} ano${years > 1 ? 's' : ''}`;
        } else if (months >= 1) {
            return `há ${months} mês${months > 1 ? 'es' : ''}`;
        } else if (days >= 1) {
            return `há ${days} dia${days > 1 ? 's' : ''}`;
        } else if (hours >= 1) {
            return `há ${hours} hora${hours > 1 ? 's' : ''}`;
        } else if (minutes >= 1) {
            return `há ${minutes} minuto${minutes > 1 ? 's' : ''}`;
        } else {
            return `há alguns segundos`;
        }
    }


    return (
        <Container>
            <ImageBanner src={videos.snippet.thumbnails.maxres?.url || videos.snippet.thumbnails.high?.url}
                alt={videos.snippet.title}
            />

            <TitleContainer>
                <ChannelImage >
                    {videos.snippet.channelTitle.toUpperCase().charAt(0)}
                </ChannelImage>
                <TextContainer>
                    <Title title={videos.snippet.title} >{videos.snippet.title}</Title>
                    <TextCard title={videos.snippet.channelTitle}>{videos.snippet.channelTitle}</TextCard>
                    <TextCard>{formatViewCount(Number(videos.statistics.viewCount))} {timeAgo(videos.snippet.publishedAt)}</TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    )
}

