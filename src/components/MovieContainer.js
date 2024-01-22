import MovieDetail from "./MovieDetail";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const MovieContainer=()=>{
    
    const nowPlaying=useSelector(store=>store.movies.nowPlayingmovies);
    const popular=useSelector(store=>store.movies.popularmovies);
    const top_rated=useSelector(store=>store.movies.top_ratedmovies);
    const upcoming=useSelector(store=>store.movies.upcoming_movies)
    const bool_movie_detail=useSelector(store=>store.moviecard.view_movie_card);
    
    return (
        // <div className=" bg-black">


        <div className="mt-[65%] mx-10 pb-4 bg-black sm:mt-[53%] sm:ml-2">
         
         <MovieList movies={upcoming} />   
         <MovieList movies={nowPlaying} title={"Now Playing"}/>
         <MovieList movies={popular} title={"Popular"}/>
         <MovieList movies={top_rated} title={"Top Rated Movies"}/>
         {bool_movie_detail && <MovieDetail/>

         }

        </div>
   
    )
}
export default MovieContainer;


