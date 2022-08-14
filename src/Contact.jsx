import React, { useState } from "react";
// import { useLocation } from "react-router-dom";

const Contact = () => {
  const [data,SetData]=useState({
    fullName:"",
    email:'',
    mobile:"",
    message:""
  });
  const eventHandle =(event)=>{
    const {name,value}=event.target;
    SetData((preVal)=>{
        return {
          ...preVal,
          [name]:value
        }
    })
  }
  const formSubmit =(e)=>{
         e.preventDefault();
         alert(`my name is ${data.fullName}. and my mobile number is ${data.mobile}.
          Email:-  [${data.email} ] . my message :- [${data.message}]
         `)
         
         
  
         
  }
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form name="myform" method="post" onSubmit={formSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Name
                </label>
                <input

                  type="text"
                  name="fullName"
                  vlaue={data.fullName}
                  onChange={eventHandle}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter full name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  vlaue={data.email}
                  onChange={eventHandle}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Mobile no
                </label>
                <input
                  type="number"
                  name="mobile"
                  vlaue={data.mobile}
                  onChange={eventHandle}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter mobile no."
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Example textarea
                </label>
                <textarea
                  className="form-control"
                  name="message"
                  vlaue={data.message}
                  onChange={eventHandle}
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-info mb-5" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Contact;
