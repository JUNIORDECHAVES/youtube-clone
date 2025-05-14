import { useContext, useEffect, useState } from "react"
import { VideoCard } from "../../components/videoCard"
import { Container, LogoShorts, SectionCategory, Sectioncontent, ShortsContainer, ShortsContent, Title, TitleContainer, VideoContainer } from "./styled"
import { MenuContext } from "../../contexts/UseMenu"
import { CategoryBar } from "../../components/categoryBar"
import { Shorts } from "../../components/shorts"

import IconShorts from "../../assets/icons8-shorts-do-youtube-48.png"
import axios from "axios"
import useSearchCategory from "../../contexts/SearchCategory"




export interface PropsVideos {
    id: string;
    snippet: {
        title: string;
        thumbnails: {
            high: {
                url: string;
            }
            maxres: {
                url: string;
            }
        }
        channelTitle: string;
        publishedAt: string;
        description: string;
    }
    statistics: {
        viewCount: string;
    }
}



export const Home = () => {

    const [Videos, setvideos] = useState<PropsVideos[]>([])

    const { isOpenMenu } = useContext(MenuContext);

    const {selectdCategory} = useSearchCategory();


    const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY

    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&hl=pt_BR&maxResults=50&videoCategoryId=${selectdCategory}&regionCode=br&key=${apiKey}`

    async function getVideos() {

        try {
            const response = await axios.get(url)
            setvideos(response.data.items)
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        getVideos()
    }, [selectdCategory])


    return (
        <Container>

            <SectionCategory>
                <CategoryBar />

            </SectionCategory>


            <Sectioncontent>

                <VideoContainer openMenu={isOpenMenu}>
                    {Videos.map((video) => (
                        <VideoCard key={video.id}  videos={video} />

                    ))}

                </VideoContainer>

                <ShortsContainer>
                    <TitleContainer>
                        <LogoShorts src={IconShorts} />
                        <Title>
                            Shorts</Title>
                    </TitleContainer>
                    <ShortsContent>
                        <Shorts />
                        <Shorts />
                        <Shorts />
                        <Shorts />
                        <Shorts />
                        <Shorts />
                    </ShortsContent>
                </ShortsContainer>

                <VideoContainer openMenu={isOpenMenu}>
                    {Videos.map((video) => (
                        <VideoCard key={video.id} videos={video} />

                    ))}

                </VideoContainer>

            </Sectioncontent>

        </Container>

    )
}
