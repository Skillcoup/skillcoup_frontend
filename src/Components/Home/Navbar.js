import React from "react";
import './Navbar.css';
import image from '../../assets/skillcoup_white.png'



const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
                <div className="container-fluid">
                   <img className="logo-img" src={image} alt="Skillcoup" height={42} />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Contact Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="/" tabIndex="-1" aria-disabled="true">Login</a>
                            </li>
                            <li className="nav-item">
                               <button className="btn btn-primary">Get Started</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>



        </>
    );

}
export default Navbar;