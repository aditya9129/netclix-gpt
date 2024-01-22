import { useDispatch, useSelector } from "react-redux";
import { update_movie_detail } from "../utils/moviecardSlice";
import { poster2 } from "../utils/constants";
const MovieDetail=()=>{ 
   
    const dispatch=useDispatch();
    const data=useSelector(store=>store.moviecard.view_movie_card);
    const handle_click=()=>{
    
       dispatch(update_movie_detail(null));
    }
    return (
        data &&
<div className="bg-gray-400 m-5 mt-[30%] sm:mt-20 p-8 ">
<button className=" text-white p-4 rounded-lg w-[10%] ml-[90%] hover:bg-red-400" onClick={handle_click}>❌</button>
    <div className=' mr-3 grid grid-cols-12 cursor-pointer  p-2'>
            <img src={poster2 +data?.poster_path} alt={data?.original_title} className="col-span-4 h-full"/>
             <div className='text-white font-bold relative col-span-8 p-4'>
                <h1 className="text-black text-2xl p-2">{data?.title}</h1> 
                 <p className="p-2">Overview:{data?.overview}</p>
                 <h2 className="text-black font-bold text-xl p-2">Release Date : {data?.release_date}</h2>
                <h2 className="text-black font-bold text-xl p-2">Rating : {data?.vote_average}</h2>

            
            
            </div>

         </div>
</div>







        
    )
}
export default MovieDetail;