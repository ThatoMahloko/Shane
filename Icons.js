import React from 'react'
import '../App.css'

import { BsFillPeopleFill, BsFillCapslockFill, BsSun, BsCaretRight, BsCaretDown } from "react-icons/bs";

function Icons() {
    return (

        <div className="container  cards" id="programms" >
            <div class="row ml-5">
                <div class="col-lg-4 col-md-4 col-sm-12 mt-2 card" style={{ "width": "300px", "background-color": "#FF8300", "height": "280px" }}>
                    <div class="card-body">
                        <h5 style={{ "text-align": "center" }}>Community Development</h5>
                        <ul>
                            <li><BsCaretRight style={{ "color": "white" }} />Youth Development, Rural and Social Development</li>
                            <li><BsCaretRight style={{ "color": "white" }} />LGBQTI Legal Advice and support (refferal)</li>
                            <li><BsCaretRight style={{ "color": "white" }} />Education on Constitutional Rights and Legal Issues</li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 mt-2 card" style={{ "width": "300px", "background-color": "#FF8300", "height": "280px" }}>
                    <div class="card-body">
                        <h5 style={{ "text-align": "center" }}>Legal Advice and Development</h5>
                        <ul>
                            <li><BsCaretRight style={{ "color": "white" }} />Empowering the community including the LGBTIQ and the youth through sustainable and social cohesion Programmes</li>
                        </ul>
                    </div>
                </div>


                <div class="col-lg-4 col-md-4 col-sm-12 mt-2 card" style={{ "width": "300px", "background-color": "#FF8300", "height": "280px" }}>
                    <div class="card-body">
                        <h5 style={{ "text-align": "center" }}>Human Rights Education</h5>
                        <h6 style={{ "text-align": "center" }}>A tool used to push back eradicate the frontiers of poverty and iliteracy on issues realting to human rights through:</h6>
                        <ul>
                            <li><BsCaretRight style={{ "color": "white" }} />Capacity Building and Skills Training, Math's & Science</li>
                            <li><BsCaretRight style={{ "color": "white" }} />Grass roots advocacy and assistance with the sourcing of Bursaries</li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-12 mt-2 card" style={{ "width": "300px", "background-color": "#FF8300", "height": "280px" }}>
                    <div class="card-body">
                        <h5 style={{ "text-align": "center" }}>Heritage</h5>
                        <h6 style={{ "color": "white", "text-align": "center" }}>Discover and Preserve our culture through:</h6>
                        <ul>
                            <li><BsCaretRight style={{ "color": "white", "text-align": "left" }} />Sports Arts Culture Recreation</li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-12 mt-2 card" style={{ "width": "300px", "background-color": "#FF8300", "height": "300px" }}>
                    <div style={{}} class="card-body">
                        <h5 style={{ "text-align": "center" }}>Enviroomental Care & Agriculture</h5>
                        <h6 style={{ "text-align": "center" }}>To educate communities to take better care of environment through:</h6>
                        <ul>
                            <li><BsCaretRight style={{ "color": "white" }} />Health and Crime Prevention</li>
                            <li><BsCaretRight style={{ "color": "white" }} />LGBQTI Legal Advice and support (refferal)</li>
                            <li><BsCaretRight style={{ "color": "white" }} />Education on Constitutional Rights and Legal Issues</li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-12 mt-2 card" style={{ "width": "300px", "background-color": "#FF8300", "height": "280px" }}>
                    <div class="card-body">
                        <h5 style={{ "text-align": "center" }}>Community Development</h5>
                        <ul>
                            <li><BsCaretRight style={{ "color": "white" }} />Youth Development, Rural and Social Development</li>
                            <li><BsCaretRight style={{ "color": "white" }} />LGBQTI Legal Advice and support (refferal)</li>
                            <li><BsCaretRight style={{ "color": "white" }} />Education on Constitutional Rights and Legal Issues</li>
                        </ul>
                    </div>
                </div>


            </div>





        </div>


    )
}

export default Icons
