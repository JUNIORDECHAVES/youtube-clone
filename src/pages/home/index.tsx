import { useContext } from "react"
import { VideoComponent } from "../../components/videoComponent"
import { Container, LogoShorts, SectionCategory, Sectioncontent, ShortsContainer, ShortsContent, Title, TitleContainer, VideoContainer } from "./styled"
import { MenuContext } from "../../contexts/UseMenu"
import { Category } from "../../components/category"
import { Shorts } from "../../components/shorts"

import IconShorts from "../../assets/icons8-shorts-do-youtube-48.png"
import { useVideo } from "../../contexts/useVideo"
import FiltroCategoria from "../../components/filterCategoriy"


const Videos = [
    {
        image: 'https://i.ytimg.com/vi/eyRIrz8I9OQ/maxresdefault.jpg',
        title: 'Cesar Mc - Ligação Perdida Feat Deus (Videoclipe Oficial)',
        channel: 'CESAR MC',
        views: '1,8 mi ',
        time: '1 ano',
    },
    {
        image: 'https://i.ytimg.com/vi/eyRIrz8I9OQ/maxresdefault.jpg',
        title: 'Cesar Mc - Ligação Perdida Feat Deus (Videoclipe Oficial)',
        channel: 'CESAR MC',
        views: '1,8 mi ',
        time: '1 ano',
    },
    {
        image: 'https://i.ytimg.com/vi/eyRIrz8I9OQ/maxresdefault.jpg',
        title: 'Cesar Mc - Ligação Perdida Feat Deus (Videoclipe Oficial)',
        channel: 'CESAR MC',
        views: '1,8 mi ',
        time: '1 ano',
    },
    {
        image: 'https://i.ytimg.com/vi/eyRIrz8I9OQ/maxresdefault.jpg',
        title: 'Cesar Mc - Ligação Perdida Feat Deus (Videoclipe Oficial)',
        channel: 'CESAR MC',
        views: '1,8 mi ',
        time: '1 ano',
    },
    {
        image: 'https://i.ytimg.com/vi/eyRIrz8I9OQ/maxresdefault.jpg',
        title: 'Cesar Mc - Ligação Perdida Feat Deus (Videoclipe Oficial)',
        channel: 'CESAR MC',
        views: '1,8 mi ',
        time: '1 ano',
    },
    {
        image: 'https://i.ytimg.com/vi/eyRIrz8I9OQ/maxresdefault.jpg',
        title: 'Cesar Mc - Ligação Perdida Feat Deus (Videoclipe Oficial)',
        channel: 'CESAR MC',
        views: '1,8 mi ',
        time: '1 ano',
    },
    {
        image: 'https://i.ytimg.com/vi/eyRIrz8I9OQ/maxresdefault.jpg',
        title: 'Cesar Mc - Ligação Perdida Feat Deus (Videoclipe Oficial)',
        channel: 'CESAR MC',
        views: '1,8 mi ',
        time: '1 ano',
    },
    {
        image: 'https://i.ytimg.com/vi/eyRIrz8I9OQ/maxresdefault.jpg',
        title: 'Cesar Mc - Ligação Perdida Feat Deus (Videoclipe Oficial)',
        channel: 'CESAR MC',
        views: '1,8 mi ',
        time: '1 ano',
    },
    {
        image: 'https://i.ytimg.com/vi/eyRIrz8I9OQ/maxresdefault.jpg',
        title: 'Cesar Mc - Ligação Perdida Feat Deus (Videoclipe Oficial)',
        channel: 'CESAR MC',
        views: '1,8 mi ',
        time: '1 ano',
    },
]



export const Home = () => {

    const { isOpenMenu } = useContext(MenuContext)

    const contentCategory = [
        "Todos",
        "Música",
        "Jogos",
        "Esportes",
        "Notícias",
        "Entretenimento",
        "Tecnologia",
        "Ciência",
        "Educação",
        "Saúde",
        "Lazer",
        "Religião",
        "Política",
        "Cultura",
        "Economia",
        "Saúde Pública",
        "Educação Infantil",
        "Saúde Mental",
        "pokemon",
        "Star Wars",
        "Lord of the Rings",
        "The Hobbit",
        "Game of Thrones",
        "Avatar",
    ];


    const { videos } = useVideo()



    return (
        <Container>

            <SectionCategory>
                <Category categorys={contentCategory} />

            </SectionCategory>
            

            <Sectioncontent>

                <VideoContainer openMenu={isOpenMenu}>
                    {Videos.map((video) => (
                        <VideoComponent videos={video} />

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
                    {videos.map((video) => (
                        <VideoComponent videos={video} />

                    ))}

                </VideoContainer>

            </Sectioncontent>


        </Container>

    )
}