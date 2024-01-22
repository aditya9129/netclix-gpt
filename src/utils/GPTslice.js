import { createSlice } from "@reduxjs/toolkit";
const GPTSlice=createSlice({
    name:"GPT",
    initialState:{
        gpt:false,
        lang:"en",
    },
    reducers:{
        setuser:(state)=>{
          state.gpt=true
        },
        setuser1:(state)=>{
            state.gpt=false;
        },
        setLang:(state,action)=>{
            state.lang=action.payload;
        },
      
    }
})
export const {setuser,setuser1,setLang}=GPTSlice.actions;
export default GPTSlice.reducer;