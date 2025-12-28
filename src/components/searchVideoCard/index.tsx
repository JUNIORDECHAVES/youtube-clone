import { ChannelContainer, ChannelImage, ContainerVideoSearch, Description, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./style"
import { PropsVideos } from "../../pages/home"

interface PropsVideo {
    video: PropsVideos
}



export const SearchVideoCard = ({ video }: PropsVideo) => {
    

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
        <ContainerVideoSearch>
            <ImageBanner src={video.snippet.thumbnails.maxres?.url || video.snippet.thumbnails.high?.url}
                alt={video.snippet.title}
            />
            <TitleContainer>



                <TextContainer>
                    <Title title={video.snippet.title} >{video.snippet.title}</Title>
                    <TextCard>view {timeAgo(video.snippet.publishedAt)}</TextCard>
                    <ChannelContainer>
                        <ChannelImage>
                            {video.snippet.channelTitle.toUpperCase().charAt(0)}
                        </ChannelImage>
                        <TextCard title={video.snippet.channelTitle}>{video.snippet.channelTitle}</TextCard>
                    </ChannelContainer>
                    <Description>{video.snippet.description}</Description>
                </TextContainer>
            </TitleContainer>
        </ContainerVideoSearch>
    )
}