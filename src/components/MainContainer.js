import { useSelector } from "react-redux";
import Videotitle from "./Videotitle";
import BackVideo from "./BackVideo";

const MainContainer=()=>{
    const movies=useSelector(store=>store.movies.nowPlayingmovies);
    if(!movies)return ;
    const mainMovie=movies[0];
    
    return (
        <div className="w-full absolute bg-black">
    
        <Videotitle name={mainMovie?.title} overview={mainMovie?.overview} />
        <BackVideo id={mainMovie?.id} /> 
        </div>
    )
}
export default MainContainer;
