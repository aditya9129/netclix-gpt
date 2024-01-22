export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:"Bearer "+process.env.REACT_APP_TMBD_key ,
  
  }
};
export const moviesapi="https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
export const popularmoviesapi="https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
export const top_ratedapi="https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
export const upcoming_moviesapi="https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

export const Logo="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const Netflix_bg="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_large.jpg";
export const poster="https://image.tmdb.org/t/p/w500";
export const poster2="https://image.tmdb.org/t/p/w300";
export const open_ai_key=process.env.REACT_APP_open_ai_key;
export const search_tmbd="https://api.themoviedb.org/3/search/movie?query="