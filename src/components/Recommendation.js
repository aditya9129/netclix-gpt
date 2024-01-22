import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";
const Recommendation=()=>{
    const movies=useSelector(store=>store.movies.GPT_movies)
    
      
    
   
    return (   
                <div className="w-10/12 mx-auto">

            

                    <div className='flex flex-wrap mt-4'>

                        {movies?.map((e) => (
                            <MovieCard data={e} key={e.id} />
                        ))}
                    </div>

                </div>
                
        
    )
   
}
export default Recommendation;