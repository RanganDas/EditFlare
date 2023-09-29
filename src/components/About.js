// AboutUs.js

import React from "react";
import { Link } from "react-router-dom"; 


function AboutUs(props) {
  return (
    <div className="about-us-container">
      <div className="d-flex justify-content-center align-items-center mt-5" style={{ color: props.mode === 'Dark' ? 'white' : 'black' }}>
        <div style={{ textAlign: "center" }}>
          <h1>About Us</h1>
          <p className="my-5 ">
            This is a text-based utility.
            <br/>
            Thanks for using.
          </p>
          
          <Link to="/" className={`btn btn-${props.buttonMode} mx-2 my-5`}>
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
