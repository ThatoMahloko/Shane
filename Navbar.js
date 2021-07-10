import React from 'react'
import '../App.css'
import { GiCloudyFork } from "react-icons/gi";

function Navbar() {
    return (
        <div>
            <nav id="navigation" class="navbar navbar-expand-lg navbar-light ">
                <GiCloudyFork className="myIcon" style={{ "color": "white", "width": "50px", "height": "50px" }} />
                <div class="container-fluid">
                    <a id="navi" class="navbar-brand">S.G.A.D</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown ">
                        <ul class="navbar-nav d-flex justify-content-end">
                            <li class="nav-item">
                                    <a id= "features" class="nav-link" href="#about">About</a>
                            </li>
                            <li class="nav-item">                             
                                <a id="pricing" class="nav-link" href="#programms">Programs</a>                                
                            </li>
                            <li class="nav-item">
                                <a id="features" class="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
