import React from "react";
import { Link } from "react-router-dom";

import "../pages/styles/Home.css";
import conflogo from "../images/platziconf-logo.svg";
import astronauts from "../images/astronauts.svg";

function Home() {
  return (
    <div className="Home">
      <div className="container ">
        <div className="row">
          <div className="Home__col col-12 col-md-4 align-items-center text-center">
            {/* <img src={conflogo} alt="Logo Conf" className="img-fluid mb-2" /> */ }
            <h1>Badge Management System</h1>
            <p>The easiest way to manage your conference</p>

            <Link to="/badges" className="btn btn-primary">
              Start Now
            </Link>
          </div>
          <div className="Home__col d-none d-md-block col-md-8">
            <img src={astronauts} alt="Astronauts" className="img-fluid p-4"  />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
