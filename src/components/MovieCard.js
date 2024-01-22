import { poster } from "../utils/constants";
import { Navigate } from "react-router-dom";
import MovieDetail from "./MovieDetail";
import { useDispatch } from "react-redux";
import { update_movie_detail } from "../utils/moviecardSlice";
const MovieCard = ({ data }) => {
    const dispatch=useDispatch();
    const handle_movie_datail=(ata)=>{
        console.log(data)
        dispatch(update_movie_detail(data));
         <MovieDetail data={data}/>
    }
    return (
        <div className='sm:w-48 w-36 mr-3 cursor-pointer  p-2' onClick={handle_movie_datail}>
            <img src={poster + data?.poster_path} alt={data?.original_title} className="contrast-100  hover:contrast-125"/>
            <div className='text-white font-bold relative '>{data?.title}</div>

        </div>
    )
}

export default MovieCard