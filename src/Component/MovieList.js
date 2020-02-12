import React from "react";
import { connect } from "react-redux";
import Card from "./Card";
import Add from "./Add";



const MovieList = (props) => {
  const {movies,searchmoviename,ratetosearch} = props
  return (
    <div className="movie">
     {(movies.filter(el2=>el2.rate>=ratetosearch).filter(el =>el.name.toLowerCase().includes(searchmoviename.toLowerCase())))
            .map(e =>(<Card el={e} />)
            )}
         <div className="imgfilm">
            <Add />
          </div>
    </div>
  );
};
const mapStateToProps = state => {
    return { ...state,movies: state.movies,ratetosearch:state.ratetosearch,searchmoviename:state.nametosearch };
  };
  export default connect(mapStateToProps)(MovieList);