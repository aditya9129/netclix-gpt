import MovieCard from "./MovieCard";
import React from 'react'

const MovieList = ({ title, movies }) => {

    return (
        <>
            <div className='mb-5 relative z-100'>


                <h3 className='text-xl text-white pt-3 capitalize font-bold'>{title}</h3>

                <div className='mt-1  flex transition-all overflow-x-auto'>



                    <div className='flex justify-evenly mt-4 '>

                        {movies?.map((e) => (
                            <MovieCard data={e} key={e.id} />
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}

export default MovieList