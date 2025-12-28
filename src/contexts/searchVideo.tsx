import { createContext, useContext, useState } from "react";
import { PropsVideos } from "../pages/home";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

type SearchVideoContextProps = {
    searchVideo: string;
    setSearchVideo: (id: string) => void;
    videos: PropsVideos[];
    handleSearch: () => void;
};

type SearchVideoProviderProps = {
    children: React.ReactNode;
};

export const SearchVideo = createContext({} as SearchVideoContextProps);

export const SearchVideoProvider = ({ children }: SearchVideoProviderProps) => {
    const [searchVideo, setSearchVideo] = useState("");
    const [videos, setVideos] = useState<PropsVideos[]>([])

    const navigate = useNavigate();
    const location = useLocation();

    const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY

    
    async function getSearchVideos() {
        try {
            const UrlSearch = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchVideo}&key=${apiKey}&type=video&maxResults=38`
            const response = await axios.get(UrlSearch)
            setVideos(response.data.items)
        } catch (error) {
            alert(error)
            throw new Error("Erro ao tentar buscar o vídeo tente novamente");
        }

    }



    function handleSearch() {
        if (searchVideo.trim() === "") {
            alert("Preencha o campo de busca");
            return;
            
        }
    
        if (location.pathname !== "/search") {
            navigate("/search");
        }

        getSearchVideos()
    }

    return (
        <SearchVideo.Provider value={{ searchVideo, setSearchVideo, videos, handleSearch }}>
            {children}
        </SearchVideo.Provider>
    );
}

export function useSearchVideo() {
    return useContext(SearchVideo);
}