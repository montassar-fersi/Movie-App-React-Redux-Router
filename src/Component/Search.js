import React from 'react';
import Star from "./Star";
import {connect} from "react-redux";
import { searchmoviename,searchmovierate } from "../Actions/action";

 const Recherche =({searchmoviename,rate,searchmovierate})=>  {
    return (
      <div className="search">
        <input
          className="entre"
          type="text"
          onChange={e => {searchmoviename(e.target.value)}}
        />
        <button className="btnsrch">
          SEARCH
        </button>
        <div className="stars">
          <h5>Minimum Rating</h5>
          <i className="star">
            <Star rate={rate} oncli={searchmovierate} />
          </i>
        </div>
      </div>
    );
  };
const mapStateToProps = state => {
  return { ...state,rate: state.ratetosearch,name:state.nametosearch };
};
export default connect (mapStateToProps,{searchmoviename,searchmovierate}) (Recherche)
