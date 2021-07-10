import React from 'react'
import '../App.css'

function Carousel() {
    return (
        <div>

            <div id="carouselExampleControlNotouching" class="carousel slide" data-touch="false" data-inerval="false">
                <div class class="carousel-inner">
                    <div class="carousel-item active">
                        <img id="cara-2" class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item active">
                        <img id="cara-2" class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item active">
                        <img id="cara-3" class="d-block w-100" alt="..."></img>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControlNotouching" role="button" data-slide="prev">
                    <span class="carousel-control-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControl" role="button" data-slide="next"></a>
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </div>

        </div>
    )
}

export default Carousel
