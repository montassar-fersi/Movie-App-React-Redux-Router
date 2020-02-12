import {
    ADD_MOVIE,
    DELETE_MOVIE,
    EDIT_MOVIE,
    SEARCH_MOVIE_NAME,
    SEARCH_MOVIE_RATE
  } from "../Const/actionTypes";
  export const addmovie = payload => {
    return { type: ADD_MOVIE, payload };
  };
  export const deletemovie = (payload) => {
    return { type: DELETE_MOVIE, payload };
  };
  export const editmovie = (payload,id) => {
    return { type: EDIT_MOVIE, payload,id };
  };
  export const searchmoviename =(payload)=>{
    return{type:SEARCH_MOVIE_NAME,payload}
  }; 
 export const searchmovierate =(payload)=>{
  return{type:SEARCH_MOVIE_RATE,payload}
 }
 