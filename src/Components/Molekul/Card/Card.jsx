import React from "react";
import './Card.scss'

const Card = (props) => {
  return (
    <div className={`card ${props.className}`}>
      <div>
        {" "}
        {props.icon}{" "}
      </div>
      <h5>{props.ket1}</h5>
      <h6>{props.ket2}</h6>
    </div>
  );
};

export default Card;
