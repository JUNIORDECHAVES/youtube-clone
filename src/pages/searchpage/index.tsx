import { useSearchVideo } from "../../contexts/searchVideo"
import { ContainerPg } from "./style";
import { SearchVideoCard } from "../../components/searchVideoCard";




export default function SearchPage()  {
    const { videos } = useSearchVideo()

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