import useMoviesTrailer from "../hooks/useMoviesTrailer";
import {useSelector } from "react-redux";
const BackVideo=({id})=>{
    useMoviesTrailer(id);
    const trailer=useSelector(store => store.movies.trailer);
   
    return (
        // <div className="sm:pt-0 pt-16">
        // <iframe
        //         className="w-full aspect-video "
        //         src={
        //             "https://www.youtube.com/embed/" +
        //             trailer?.key +
        //             "?&autoplay=1&loop=10&mute=1&modestbranding=1&cc_load_policy=0&iv_load_policy=3&controls=0&disablekb=1&fs=0&color=white"
        //         }
        //         title="YouTube video player"
        //        allow=" autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        //     ></iframe>

        // </div>
        <div class="mt-14 sm:pt-0 pt-16">
    <iframe
        class="w-full sm:aspect-video md:aspect-video-lg lg:aspect-video-xl"
        src={
            "https://www.youtube.com/embed/" +
            trailer?.key +
            "?&autoplay=1&loop=10&mute=1&modestbranding=1&cc_load_policy=0&iv_load_policy=3&controls=0&disablekb=1&fs=0&color=white"
        }
        title="YouTube video player"
        allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
    ></iframe>
</div>

    )
}
export default BackVideo;

 