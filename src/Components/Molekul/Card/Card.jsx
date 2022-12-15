import React from "react";
import './Card.scss'

const Card = (props) => {
  return (
    <div className={`card ${props.className}`}>
      <div>
        {" "}
        {props.icon}{" "}
      </div>
      <h5>{`Experience`}</h5>
      <h6>2+ Years Working</h6>
    </div>
  );
};

export default Card;
