import React from 'react'
import '../App.css'
import { BsCaretRight } from "react-icons/bs";


function Grid2() {
    return (
        <div id="about">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-4 col-sm-12">
                        <div class="grid-item1">
                            <h2>SGADC</h2>
                            <h2>The Shane Griqua Advice and Development center</h2>
                            <h5>was founded in 2013 and registered with NPO directorate nr 144-016, mainly to address issues relating to the needs of communities the needy, the rejected, the marginalized and to establish a shelter for abused men and boys to address other social illnessesnincluding unemployment etc. The otganisation was officially launched by the Deputy Minister of Justice and Constitutional Development Honorable John Jeffery (MP) in December 2014 mainly to operate as a legal Advice and Development Center</h5>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-4 col-sm-12">
                        <div class="grid-item1" style={{ backgroundColor: '#81B622' }}>
                            <h2>We currently have a project called: "DIE GROOT"</h2>
                            <h5>Where we provide a basket of services to community from where we recently purchased 5 twelve-meter container boxes that would be used for:</h5>
                            <ul>
                                <li><h5 style={{ "font-size": "17px", "text-align":"center", "margin-top":"20px" }} > <BsCaretRight />Organisational office</h5></li>
                                <li><h5 style={{ "font-size": "17px", "text-align": "center", "margin-top": "20px"  }}><BsCaretRight /> A safer space for Support group sessions and community dialogue</h5></li>
                                <li><h5 style={{ "font-size": "17px", "text-align": "center", "margin-top": "20px"  }}><BsCaretRight /> A bread Bin / Soup Kitchen that would serve as a food bank to give food to the needy especially chilldren coming from school</h5></li>
                                <li><h5 style={{ "font-size": "17px", "text-align": "center", "margin-top": "20px"  }}><BsCaretRight /> Victim Friendly Room for GBV Victims while we counsel them and refer them to the law enforcement agencies</h5></li>
                                <li><h5 style={{ "font-size": "17px", "text-align": "center", "margin-top": "20px"  }}><BsCaretRight /> Youth Development Resource Office to assist you with job seeking and other opportunities i.e. CV typing, Mailing and Copying as we don't have such a facility in the area</h5></li>
                            </ul>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Grid2
