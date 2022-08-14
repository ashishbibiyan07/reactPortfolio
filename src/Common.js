import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/img/img3.webp";

const Common = (props) => {
  return (
    <>
      <section
        id="header"
        className="d-flex align-items-center justify-content-center"
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-start justify-content-center flex-column">
                  <h1>
                    {props.heading} <strong className="company">{props.company}</strong>
                  </h1>
                  <p className="mt-1">
                    {props.title}
                  </p>
                  <div className="mt-0">
                    <button className="btn-get-started">
                      <NavLink to="/contact">{props.btn}</NavLink>
                    </button>
                  </div>
                </div>
                <div className="col-md-6 order-1  order-lg-2 header-img d-flex align-items-center justify-content-center">
                  <img
                    src={props.imgSrc}
                    alt="........."
                    className="img-fluid animated w-75"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
