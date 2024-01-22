import { useDispatch, useSelector } from "react-redux";
import languages from "../utils/languages";
import { useRef } from "react";
import { options, search_tmbd } from "../utils/constants";
import { addGPT_movies} from "../utils/movieslice";
import openai from "../utils/openAi";
const GPTsearchBar=()=>{
    const dispatch=useDispatch();
     const search_input=useRef();
     const get_tmbd=async (movie)=>{
        const result=await fetch(search_tmbd+movie,options);
        const json=await result.json();
        return json;
     }
     const filter_movies=(movies)=>{
        const movie_arr=[];
        movies.map((e)=>{

            let temp=e.results;
            if(temp.length>4){
                temp.length=4;
            }
            movie_arr.push(...temp);

        })
        const filteredMovies = movie_arr.filter(movie => (
            movie.poster_path !== null
          ))
          return filteredMovies;
     }
     let btn=true;
     const handleGPTsearch = async () => {
        
        
        const query = "Act as movies recommendation system and recommend some movies for query : " + search_input.current.value + ". give only five movies name in comma seprated format. your response should look like Gadar,Maze runner,Don,Heraferi,Avengers";
        const chatResults = await openai.chat.completions.create({
          messages: [{ role: 'user', content: query }],
          model: 'gpt-3.5-turbo',
        });
         let gptResult=['airplane!', 'anchorman: the legend of ron burgundy', 'napoleon dynamite', 'zoolander', 'superbad']; 
         gptResult = chatResults?.choices[0]?.message?.content?.toLowerCase()?.split(", ");
    
        let tmbd_result=gptResult.map((movie)=>get_tmbd(movie));
        tmbd_result=await Promise.all(tmbd_result);
        tmbd_result=filter_movies(tmbd_result);
        console.log(tmbd_result);
        dispatch(addGPT_movies(tmbd_result));
    }
    const lang=useSelector(store=>store.GPT.lang);
    return (
        
        <div className="w-1/2 mx-auto mt-[45%] md:mt-[8%] sm:mt-[12%] ">
            <form className="grid grid-cols-12 " onSubmit={(e)=>(e.preventDefault())}>
                <input ref={search_input} className="col-span-7 sm:col-span-9 p-4 rounded-lg " type="text" placeholder={languages[lang].GPTplaceholder}></input>
                <button className="bg-red-500 p-4 col-span-5 sm:col-span-3 rounded-lg ml-2  md:text-2xl hover:opacity-80" onClick={handleGPTsearch}>{languages[lang].search}</button>
            </form>
          
        </div>
        
    )
}
export default GPTsearchBar;
