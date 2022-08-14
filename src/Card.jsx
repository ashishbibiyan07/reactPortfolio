import React from "react";
import { NavLink } from "react-router-dom";
const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card mb-3">
          <img src={props.img} className="card-img-top" alt="..." width="190px" height="210px" />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.cardText}</p>
            <NavLink to="" className="btn btn-primary">
              {props.cardBtn}
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
