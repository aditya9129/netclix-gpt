import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
import moviesReducer from "./movieslice";
import GPTReducer from "./GPTslice";
import moviecardReducer from "./moviecardSlice"
const appstore=configureStore({
    reducer:{
      user:userReducer,
      movies:moviesReducer,
      GPT:GPTReducer,
      moviecard:moviecardReducer,
    }
})
export default appstore
