import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { addtrailer } from "../utils/movieslice";
import {options}  from "../utils/constants";
import { useSelector } from "react-redux";
const useMoviesTrailer =(id)=>{
    const dispatch = useDispatch();
    const a=useSelector(store=>store.movies.trailer)
    const fetchMovieVideo = async () => {

        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, options);
        const videos = await data.json();
         const filterVideos = await videos?.results.filter((e) => e.type === "Trailer");
        // console.log(videos);
        let trailer = videos[0];
        if (filterVideos.length > 0) {
            trailer = filterVideos[0];
        }
        
        dispatch(addtrailer(trailer))
        
      
    }
    useEffect(() => {
        

        !a && fetchMovieVideo();
        
    }, [])
}

export default useMoviesTrailer;

  