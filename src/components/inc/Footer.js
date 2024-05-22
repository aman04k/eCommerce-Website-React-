import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <section className="section footer bg-dark text-white">
            <div className="container">
                <div className="row">

                    <div className="col-md-4">
                        <h6>Company Information</h6>
                        <hr />
                        <p className="text-white">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>

                    <div className="col-md-4">
                        <h6>Quick Links</h6>
                        <hr />
                        <div><Link to="/">Home</Link></div>
                        <div><Link to="/">About</Link></div>
                        <div><Link to="/">Contact</Link></div>
                        <div><Link to="/">Blog</Link></div>
                    </div>

                    <div className="col-md-4">
                        <h6>Contact Information</h6>
                        <hr />
                        <div><p className="text-white mb-1">#64, Bangalore Karnataka India</p></div>
                        <div><p className="text-white mb-1">+91 8888XXXXX8</p></div>
                        <div><p className="text-white mb-1">+91 8888XXXXX8</p></div>
                        <div><p className="text-white mb-1">email@domain.com</p></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Footer;