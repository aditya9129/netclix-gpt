import { useEffect } from "react";

import { moviesapi,popularmoviesapi,top_ratedapi,upcoming_moviesapi,options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addmovies,addPopularmovies,addtop_ratedmovies ,addupcoming_movies} from "../utils/movieslice";
const useMovies=()=>{
    const dispatch=useDispatch();
    const a=useSelector(store=>store.movies.nowPlayingmovies);
    const getmovies= async ()=>{
        const data=await fetch(moviesapi,options);
        const json=await data.json();
        dispatch(addmovies(json?.results))
        const data1=await fetch(popularmoviesapi,options);
        const json1=await data1.json();
        dispatch(addPopularmovies(json1?.results))
        const data2=await fetch(top_ratedapi,options);
        const json2=await data2.json();
        dispatch(addtop_ratedmovies(json2?.results))
        const data3=await fetch(upcoming_moviesapi,options);
        const json3=await data3.json();
        dispatch(addupcoming_movies(json3?.results))
    }
   useEffect(()=>{
    //only make api call if movies are null
    !a && getmovies();
   
    }  
    ,[]);
}
export default useMovies;

    