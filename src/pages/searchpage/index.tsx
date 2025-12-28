import { useSearchVideo } from "../../contexts/searchVideo"
import { ContainerPg } from "./style";
import { SearchVideoCard } from "../../components/searchVideoCard";
import { useNavigate } from "react-router-dom";




export default function SearchPage()  {
    const navigate = useNavigate();
    const { videos } = useSearchVideo()


    if(videos.length === 0) navigate("/")


    return (
        <ContainerPg>

            {videos.map((video) => 
            (
                <SearchVideoCard key={video.id} video={video}/>
            )
            )}
            
        </ContainerPg>
    )
}