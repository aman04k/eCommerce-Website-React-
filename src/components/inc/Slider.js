import React from "react";
import img0 from '../images/img0.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';
import img7 from '../images/img7.jpg';
import img8 from '../images/img8.jpg';
import '../../App.css';



function Slider() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item">
                    <img src={img0} className="d-block w-100 custom-height" alt="..." />
                </div>
                <div className="carousel-item active">
                    <img src={img5} className="d-block w-100 custom-height" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={img6} className="d-block w-100 custom-height" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={img7} className="d-block w-100 custom-height" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={img8} className="d-block w-100 custom-height" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Slider;
