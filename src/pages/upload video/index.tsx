import React, { useState } from 'react';
import {
    Container,
    Button,
    ContentInteracao,
    ContentVideo,
    ContainerVideo,
    VideoImg,
    Formulario,
    FormContainer,
    Label,
    Input,
    ContentForm,
    TextArea,
    Title,
    Separator,
    ButtonAction,
    ButtonActionContainer,
    TitleContainer,
    ChannelImage,
    TextContainer,
    TitleVideo,
} from './style';

import { FaTrashAlt } from 'react-icons/fa';

const EnvioVideo = () => {


    interface FormVideoInput {
        titulo: string;
        descricao: string;
        url: File | null;
        thumbnail: File | null;
    }

    interface FormVideo {
        id: number;
        titulo: string;
        descricao: string;
        url: string;
        thumbnail: string;
    }


    const [novoVideo, setNovoVideo] = useState<FormVideoInput>({
        titulo: '',
        descricao: '',
        url: null,
        thumbnail: null
    });


    const [listaVideos, setListaVideos] = useState<FormVideo[]>([
        {
            id: 1,
            titulo: 'Amazing Nature',
            descricao: 'Descrição do vídeo 1',
            url: 'https://www.w3schools.com/html/mov_bbb.mp4',
            thumbnail: 'https://www.w3schools.com/html/pic_trulli.jpg',
        },
        {
            id: 2,
            titulo: 'Tech Future',
            descricao: 'Descrição do vídeo 2',
            url: 'https://www.w3schools.com/html/movie.mp4',
            thumbnail: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=640&q=80',
        },
        {
            id: 3,
            titulo: 'Wonders of Travel',
            descricao: 'Descrição do vídeo 3',
            url: 'https://www.w3schools.com/html/mov_bbb.mp4',
            thumbnail: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e'
        }
    ]);

    const [upload, setUpload] = useState(false);

    function uploadVideo(novoVideo: FormVideoInput) {
        if (!novoVideo.url || !novoVideo.thumbnail || !novoVideo.titulo || !novoVideo.descricao) {
            alert("Preencha todos os campos.");
            return;
        }

        const novoId = Date.now();
        const novoVideoObj: FormVideo = {
            id: novoId,
            titulo: novoVideo.titulo,
            descricao: novoVideo.descricao,
            url: URL.createObjectURL(novoVideo.url),
            thumbnail: URL.createObjectURL(novoVideo.thumbnail)
        };

        setListaVideos([novoVideoObj, ...listaVideos]);
        setUpload(false);
    }

    function deleteVideo (indice: number) {
        const novoArray = [...listaVideos];
        novoArray.splice(indice, 1);
        setListaVideos(novoArray);

    }

    return (
        <Container>
            <ContentInteracao>
                <Button width='100px' height='60px' backgroundColor=' #6AD8F2' onClick={() => setUpload(true)} >criar Vídeo</Button>
            </ContentInteracao>

            {upload && <FormContainer>
                <Formulario>
                    <Title>Upload video</Title>

                    <ContentForm>
                        <Label htmlFor="video">Vídeo:</Label>
                        <Input type="file" accept='video/*' id="video"
                            onChange={(e) => setNovoVideo({ ...novoVideo, url: e.target.files?.[0] || null })}
                        />
                    </ContentForm>

                    <Separator />

                    <ContentForm>
                        <Label htmlFor="title">titulo:</Label>
                        <Input type="text" id="title"
                            onChange={(e) => setNovoVideo({ ...novoVideo, titulo: e.target.value })}
                        />
                    </ContentForm>

                    <Separator />

                    <ContentForm>
                        <Label htmlFor="thumbnail">thumbnail:</Label>
                        <Input type="file" accept='image/*' id="thumbnail"
                            onChange={(e) => setNovoVideo({ ...novoVideo, thumbnail: e.target.files?.[0] || null })}
                        />
                    </ContentForm>

                    <Separator />

                    <ContentForm>
                        <Label htmlFor="description">descrição:</Label>
                        <TextArea id="description"
                            onChange={(e) => setNovoVideo({ ...novoVideo, descricao: e.target.value })}
                        />
                    </ContentForm>

                    <Separator />

                    <ButtonActionContainer justifyContent='space-between'>
                        <ButtonAction onClick={() => setUpload(false)}>Cancelar Vídeo</ButtonAction>
                        <ButtonAction onClick={(e) => {
                            e.preventDefault();
                            uploadVideo(novoVideo);
                        }}>Enviar Vídeo</ButtonAction>
                    </ButtonActionContainer>


                </Formulario>
            </FormContainer>}

            {listaVideos.length === 0
                ? <p style={{ textAlign: "center", fontWeight: "bold" }}>o usuário não criou nenhum video ainda!</p>
                : <ContainerVideo>
                    {listaVideos.map((video,indice) => (
                        <ContentVideo key={video.id}>
                            <VideoImg thumbnail={video.thumbnail} />
                            <TitleContainer>
                                <ChannelImage>
                                    JR
                                </ChannelImage>
                                <TextContainer>
                                    <TitleVideo title={video.titulo} >{video.titulo}</TitleVideo>
                                </TextContainer>
                            </TitleContainer>

                            <ButtonActionContainer justifyContent='flex-end'>
                                <Button height='25px' width='25px' backgroundColor=' #f26a6a' onClick={() => deleteVideo(indice)}>
                                <FaTrashAlt size={15} color="#000" />
                                    </Button>
                            </ButtonActionContainer>
                        </ContentVideo>


                    ))}


                </ContainerVideo>}

        </Container>
    );
};

export default EnvioVideo;
