import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

const Recommendation=()=>{
    const movies=useSelector(store=>store.movies.GPT_movies)
   
    return (   
                <div className="w-10/12 mx-auto opacity-85">

            {movies  &&<h3 className='text-xl text-white ml-2 mt-2 capitalize font-bold'>Recommendation</h3>}

                    <div className='flex flex-wrap mt-4'>

                        {movies?.map((e) => (
                            <MovieCard data={e} key={e.id} />
                        ))}
                    </div>

                </div>
                
        
    )
   
}
export default Recommendation;