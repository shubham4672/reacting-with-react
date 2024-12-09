import React from "react";
import "../App.css";
const Card = (props) => {
  return (
    <>
      <div className='card'>
        <dt>{props.title}</dt>
        <dd>{props.body}</dd>
      </div>
    </>
  );
};

export default Card;
