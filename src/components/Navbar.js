import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo.svg';
import "./styles/Navbar.css";

class Navbar extends React.Component {
    render() {
        return (
            /*<div className="Navbar"> 
                <div className="container-fluid">    
                    <Link to="/" className="Navbar__brand">
                        <img src={logo} alt="" className="Navbar__brand-logo"/>
                        <span className="font-weight-light" >Barra de Navegación </span>
                        <span className="font-weight-bold">Badges</span>
                    </Link>
                </div>
            </div>*/

            <nav className="navbar Navbar navbar-expand-lg navbar-dark">
                
                <Link to="/" className="Navbar__brand">
                    <img src={logo} alt="" className="Navbar__brand-logo"/>
                    <span className="font-weight-light" >Test APP Badges </span>
                    <span className="font-weight-bold"> - React</span>
                </Link>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav mr-auto mt-2 mt-md-0">
                        <li className="nav-item active">
                            <a className="Navbar__brand" href="/badges">Badges <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="Navbar__brand" href="/characters">Characters</a>
                        </li>
                    </ul>
                    
                    
                </div>
            </nav>

        );
    }
} 

export default Navbar;