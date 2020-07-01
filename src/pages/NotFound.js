import React  from "react";
import {Link} from 'react-router-dom';

import img_error from  '../images/404.svg';
import conflogo from "../images/badge-header.svg";

import "./styles/Badges.css";
import "../pages/styles/notfound.css";
import "../pages/styles/Home.css";

function NotFound () {
  return (
    <div className="Home">
      <div className="container">
        <div className="row justify-content-center listrecent listrelated align-items-center" >
          <div className="col-md-6 align-items-center text-center">
            <h1 className="error__title">PAGE NOT FOUND</h1>
            <p className="error__info">
              We can't seem to find the page you're looking for
            </p>
            <p><Link to="/" className="btn btn-primary">
                Back to home
              </Link></p>
          </div>
          <div className="col-md-6 align-items-center text-center">
            <img src={img_error} alt="" />
            
          </div>

        </div>
        </div>
    </div>
  );
}

export default NotFound;