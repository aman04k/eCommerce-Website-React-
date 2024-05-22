import React from 'react';
import Vmc from './inc/Vmc.js';

function Aboutus() {
    return (
        <div>
            <section className='py-4 bg-info'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>About Us</h4>
                        </div>
                        <div className="col-md-8 my auto">
                            <h6 className="float-end">
                                Home / About Us
                            </h6>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-dark text-white p-3 boder-bottom">
                <div className="container">
                    <h5 className="main-heading">Our Company</h5>
                    <div className="underline"></div>
                    <p className="text-white">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>

            </section>
            {/* Our vision , mission and value */}

            <Vmc />
        </div>
    );
};

export default Aboutus;