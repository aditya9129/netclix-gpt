import { createSlice } from "@reduxjs/toolkit";
const moviecardSlice=createSlice({
    name:"moviecard",
    initialState:{
        view_movie_card:null,
    },
    
    reducers:{
        update_movie_detail:(state,action)=>{
            state.view_movie_card=action.payload
        }
    }
})
export const {update_movie_detail}= moviecardSlice.actions;
export default  moviecardSlice.reducer;