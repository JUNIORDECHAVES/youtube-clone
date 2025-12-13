import React, { useState } from 'react';
import {
    Container,
    Titulo,
    Formulario,
    Label,
    Input,
    TextArea,
    Botao,
    ImagemPreview,
    PreviewContainer,
    TextoPreview
} from './style';

const CriarTransmissao = () => {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [thumbnail, setThumbnail] = useState<File | null>(null);
    const [thumbnailUrl, setThumbnailUrl] = useState('');
    const [enviado, setEnviado] = useState(false);

    const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && /\.(jpe?g|png)$/i.test(file.name)) {
            setThumbnail(file);
            setThumbnailUrl(URL.createObjectURL(file));
        } else {
            alert('Somente arquivos .jpg ou .png são permitidos.');
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!titulo.trim() || !thumbnail) {
            alert('O título e a thumbnail são obrigatórios.');
            return;
        }
        setEnviado(true);
    };

    return (
        <Container>
            {!enviado ? (
                <>
                    <Titulo>Configurar Transmissão Ao Vivo</Titulo>
                    <Formulario onSubmit={handleSubmit}>
                        <Label>Título da Live *</Label>
                        <Input
                            type="text"
                            placeholder="Ex: Aulão de React + Styled Components"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                            required
                        />

                        <Label>Descrição (opcional)</Label>
                        <TextArea
                            rows={4}
                            placeholder="Conte para o público do que se trata a transmissão."
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        />

                        <Label>Thumbnail *</Label>
                        <Input
                            type="file"
                            accept="image/png, image/jpeg"
                            onChange={handleThumbnailChange}
                            required
                        />

                        {thumbnailUrl && <ImagemPreview src={thumbnailUrl} alt="Preview da Thumbnail" />}

                        <Botao type="submit">Iniciar Transmissão</Botao>
                    </Formulario>
                </>
            ) : (
                <PreviewContainer>
                    <h2>Prévia da Transmissão</h2>
                    <ImagemPreview src={thumbnailUrl} alt="Thumbnail" />
                    <TextoPreview>
                        <h3>{titulo}</h3>
                        {descricao && <p>{descricao}</p>}
                    </TextoPreview>
                </PreviewContainer>
            )}
        </Container>
    );
};

export default CriarTransmissao;
