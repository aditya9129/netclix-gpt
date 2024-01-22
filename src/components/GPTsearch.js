import GPTsearchBar from "./GPTsearchBar";
import { Netflix_bg } from "../utils/constants";
import Recommendation from "./Recommendation";
const GPTsearch=()=>{
    
    return (
        <div className=" w-full mx-auto bg-black">
            
            <GPTsearchBar/>
            <img src={Netflix_bg}  alt="bgimage" className="fixed mt-2 hidden md:block max-h-[your-max-height] "
/>

            <Recommendation/>
           
        </div>
    )
}
export default GPTsearch;