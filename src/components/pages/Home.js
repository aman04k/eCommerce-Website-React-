import React from 'react';
import Slider from '../inc/Slider';
import { Link } from 'react-router-dom';
import Vmc from './inc/Vmc.js';
import Servies1 from'../images/img.jpg';

function Home() {
    return (
        <div>
            <Slider />

            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className="main-heading">Our Company</h1>
                            <div className="underline mx-auto"></div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                            <Link to="/about" className="btn btn-warning shadow">Read More</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our vision , mission and value */}

            <Vmc />

            {/* Our Servise */}

            <section className="section  boder top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-5 text-center">
                            <h1 className="main-heading">Our Servises</h1>
                            <div className="underline mx-auto"></div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="card shadow">
                                <img src={Servies1} className="w-100 boder-bottom" alt='servieses' />
                                <div className="card-body">
                                    <h6>Servise 1</h6>
                                    <div className="underline"></div>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                    <Link to="/Servise" className="btn btn-link">Read More</Link>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-4 ">
                            <div className="card shadow">
                                <img src={Servies1} className="w-100 boder-bottom" alt='servieses' />
                                <div className="card-body">
                                    <h6>Servise 1</h6>
                                    <div className="underline"></div>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                    <Link to="/Servise" className="btn btn-link">Read More</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 ">
                            <div className="card shadow">
                                <img src={Servies1} className="w-100 boder-bottom" alt='servieses' />
                                <div className="card-body">
                                    <h6>Servise 1</h6>
                                    <div className="underline"></div>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                    <Link to="/Servise" className="btn btn-link">Read More</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;