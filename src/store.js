import movieappReduce from "./Reducers/movieappReduce";
import { createStore } from "redux";

const store = createStore(
  movieappReduce,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;