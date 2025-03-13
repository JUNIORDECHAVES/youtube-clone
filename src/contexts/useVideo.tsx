import { createContext, useState, ReactNode, useContext } from "react";
import api from "../api";// Importa a API configurada

// Tipo do vídeo
interface Video {
    id: string;
    title: string;
    description: string;
    url: string;
}

// Tipo do contexto
interface VideoContextType {
    videos: Video[];
    searchVideos: (query: string) => Promise<void>;
}

// Criando o contexto
const VideoContext = createContext<VideoContextType | undefined>(undefined);

// Criando o Provider
export const VideoProvider = ({ children }: { children: ReactNode }) => {
    const [videos, setVideos] = useState<Video[]>([]);

    // Função para buscar vídeos
    const searchVideos = async (query: string) => {
        try {
            const response = await api.get(`/videos/search?search=${query}`);
            setVideos(response.data.video); // Armazena os vídeos no estado global
        } catch (error) {
            console.log("Erro ao buscar vídeos", error);
        }
    };


    return (
        <VideoContext.Provider value={{ videos, searchVideos }}>
            {children}
        </VideoContext.Provider>
    );
};

// Hook para acessar o contexto

export const useVideo = () => {
    const context = useContext(VideoContext);
    if (!context) {
        throw new Error("useVideo deve ser usado dentro de um VideoProvider");
    }
    return context;
};