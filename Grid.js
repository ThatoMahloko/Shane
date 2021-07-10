import React from 'react'
import '../App.css'

function Grid() {
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="grid-item">EXPLORE</div>
                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="grid-item">TAKE ACTION</div>
                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="grid-item" id="donate">MAKE A DIFFERNCE</div>
                    </div>



                </div>
               
               
            </div>
        </div>
    )
}

export default Grid
