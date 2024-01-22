import { useSelector } from "react-redux";
import useMovies from "../hooks/useMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTsearch from "./GPTsearch";
import MovieDetail from "./MovieDetail";
const Browse=()=>{
    useMovies();
    let gpt_btn=useSelector(store=>store.GPT.gpt);
    let movie_detail=useSelector(store=>store.moviecard.view_movie_card);
    return (
        <div className="bg-black">
          <div className="flex">
            <Header />
          </div>
          {!movie_detail ? (
            gpt_btn ? (
              <GPTsearch />
            ) : (
              <>
                <MainContainer />
                <SecondaryContainer />
              </>
            )
          ) : <MovieDetail/>}
        </div>
      );
      
    }
    export default Browse;