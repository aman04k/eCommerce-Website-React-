import React from 'react';

function Contactus() {
    return (
        <div>
            <section className="py-4 bg-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>Contact Us</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end">
                                Home / About Us
                            </h6>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-4">
                <div className="container">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <h6>Contact Form</h6>
                                    <hr />
                                    <div className="form-group mb-3">
                                        <label>Full Name</label>
                                        <input type="text" className="form-control" placeholder="Enter Full Name" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Email</label>
                                        <input type="email" className="form-control" placeholder="Enter Email" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Phone Number</label>
                                        <input type="text" className="form-control" placeholder="Enter Phone Number" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Message</label>
                                        <textarea className="form-control" rows="4" placeholder="Enter Your Message"></textarea>
                                    </div>
                                    <div className="form-group text-end">
                                        <button className="btn btn-primary">Send Message</button>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h6>Contact Information</h6>
                                    <hr />
                                    <p>123, Main Street, Your City, Your Country</p>
                                    <p>Email: info@example.com</p>
                                    <p>Phone: +123 456 7890</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contactus;
