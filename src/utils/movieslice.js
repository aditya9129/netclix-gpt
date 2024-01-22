import { createSlice } from "@reduxjs/toolkit";
const movieslice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingmovies:null,
        popularmovies:null,
        top_ratedmovies:null,
        upcoming_movies:null,
        GPT_movies:null,
        trailer:null,
    },
    reducers:{
        addmovies:(state,action)=>{
        state.nowPlayingmovies= action.payload
        },
        addPopularmovies:(state,action)=>{
            state.popularmovies= action.payload
            },
        addtop_ratedmovies:(state,action)=>{
                state.top_ratedmovies= action.payload
        },    
        addupcoming_movies:(state,action)=>{
            state.upcoming_movies= action.payload
        },
        addGPT_movies:(state,action)=>{
            state.GPT_movies= action.payload
        },
        addtrailer:(state,action)=>{
                state.trailer= action.payload
        },
        removedata:(state,action)=>{
            return null;
        }
       
    }
})
export const {addmovies,addPopularmovies,addtop_ratedmovies,addupcoming_movies,addGPT_movies,addtrailer,removedata}=movieslice.actions;
export default movieslice.reducer;