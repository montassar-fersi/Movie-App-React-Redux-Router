import React from "react";

const Star = props => {
  const stars = x => {
    let star = [];
    for (let i = 0; i < 5; i++) {
      if (i < x) {
        star.push(<span onClick={props.oncli?()=>props.oncli(i + 1):0}>★</span>);
      } else {
        star.push(<span onClick={props.oncli?()=>props.oncli(i + 1):0}>☆</span>);
      }
    }
    return star;
  };
  return <div>{stars(props.rate)}</div>;
};
export default Star;