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


    interface FormPostInput {
        sobre: string;
        descricao: string;
        url: File | null;

    }

    interface FormPost {
        id: number;
        sobre: string;
        descricao: string;
        url: string;
    }


    const [novoPost, setNovoPost] = useState<FormPostInput>({
        sobre: '',
        descricao: '',
        url: null,
    });


    const [listaVideos, setListaVideos] = useState<FormPost[]>([
        {
            id: 1,
            sobre: 'Amazing Nature',
            descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illo ad possimus, amet aut architecto odio maxime quos praesentium, et, dolores soluta nulla provident asperiores perspiciatis mollitia quasi cupiditate debitis!',
            url: 'https://www.w3schools.com/html/pic_trulli.jpg',
        },
        {
            id: 2,
            sobre: 'Tech Future',
            descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illo ad possimus, amet aut architecto odio maxime quos praesentium, et, dolores soluta nulla provident asperiores perspiciatis mollitia quasi cupiditate debitis!',
            url: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=640&q=80',
        },
        {
            id: 3,
            sobre: 'Wonders of Travel',
            descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illo ad possimus, amet aut architecto odio maxime quos praesentium, et, dolores soluta nulla provident asperiores perspiciatis mollitia quasi cupiditate debitis!',
            url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e'
        }
    ]);

    const [upload, setUpload] = useState(false);

    function uploadPost(novoPost: FormPostInput) {
        if (!novoPost.url || !novoPost.sobre || !novoPost.descricao) {
            alert("Preencha todos os campos.");
            return;
        }

        const novoId = Date.now();
        const novoPostObj: FormPost = {
            id: novoId,
            sobre: novoPost.sobre,
            descricao: novoPost.descricao,
            url: URL.createObjectURL(novoPost.url),
        };

        setListaVideos([novoPostObj, ...listaVideos]);
        setUpload(false);
    }

    function deleteVideo(indice: number) {
        const novoArray = [...listaVideos];
        novoArray.splice(indice, 1);
        setListaVideos(novoArray);

    }

    return (
        <Container>
            <ContentInteracao>
                <Button width='100px' height='60px' backgroundColor=' #6AD8F2' onClick={() => setUpload(true)} >criar post</Button>
            </ContentInteracao>

            {upload && <FormContainer>
                <Formulario>
                    <Title>Upload post</Title>

                    <ContentForm>
                        <Label htmlFor="image">post: *</Label>
                        <Input type="file" accept='image/*' id="image"
                            onChange={(e) => setNovoPost({ ...novoPost, url: e.target.files?.[0] || null })}
                        />
                    </ContentForm>

                    <Separator />

                    <ContentForm>
                        <Label htmlFor="title">sobre: *</Label>
                        <Input type="text" id="title"
                            onChange={(e) => setNovoPost({ ...novoPost, sobre: e.target.value })}
                        />
                    </ContentForm>


                    <Separator />

                    <ContentForm>
                        <Label htmlFor="description">descrição: *</Label>
                        <TextArea id="description"
                            onChange={(e) => setNovoPost({ ...novoPost, descricao: e.target.value })}
                        />
                    </ContentForm>

                    <Separator />

                    <ButtonActionContainer justifyContent='space-between'>
                        <ButtonAction onClick={() => setUpload(false)}>Cancelar post</ButtonAction>
                        <ButtonAction onClick={(e) => {
                            e.preventDefault();
                            uploadPost(novoPost);
                        }}>Enviar post</ButtonAction>
                    </ButtonActionContainer>


                </Formulario>
            </FormContainer>}

            {listaVideos.length === 0
                ? <p style={{ textAlign: "center", fontWeight: "bold" }}>o usuário não criou nenhum video ainda!</p>
                : <ContainerVideo>
                    {listaVideos.map((video, indice) => (
                        <ContentVideo key={video.id}>
                            <VideoImg thumbnail={video.url} />
                            <TitleContainer>
                                <ChannelImage>
                                    JR
                                </ChannelImage>
                                <TextContainer>
                                    <TitleVideo title={video.sobre} >{video.sobre}</TitleVideo>
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
