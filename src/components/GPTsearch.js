import GPTsearchBar from "./GPTsearchBar";
import { Netflix_bg } from "../utils/constants";
import Recommendation from "./Recommendation";
import { useSelector } from "react-redux";
const GPTsearch=()=>{
    const bool=useSelector(store=>store.movies.GPT_movies)
    return (
        <div className=" w-full mx-auto bg-black">
            
            <GPTsearchBar/>
            <img src={Netflix_bg}  alt="bgimage" className="fixed mt-2 hidden md:block max-h-[your-max-height] "/>

        { bool ?   <Recommendation/> :   <div className="relative flex items-center justify-center mt-[10%]">
      
      <div className="animate-spin rounded-full border-t-4 border-white  h-12 w-12"></div>
    </div>}
           
        </div>
    )
}
export default GPTsearch;