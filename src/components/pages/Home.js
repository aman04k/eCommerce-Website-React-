import React from 'react';
import Slider from '../inc/Slider';
import { Link } from 'react-router-dom';
import Vmc from './inc/Vmc.js';
import Servies1 from '../images/img 1.jpg';
import Servies2 from '../images/img 2.jpg';
import Servies3 from '../images/img 4.jpg';

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
                                    <h6>Allahabad</h6>
                                    <div className="underline"></div>
                                    <p>
                                        The Allahabad Kumbh Mela, now known as the Prayagraj Kumbh Mela, is one of the largest and most significant Hindu religious festivals in the world.
                                        Held every twelve years in Prayagraj (formerly Allahabad), India, it attracts millions of pilgrims who gather
                                        to bathe at the confluence of the Ganges, Yamuna, and the mythical Saraswati rivers. This sacred dip is believed to
                                        cleanse sins and bring salvation.
                                    </p>
                                    <Link to="/Servise" className="btn btn-link">Read More</Link>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-4 ">
                            <div className="card shadow">
                                <img src={Servies2} className="w-100 boder-bottom" alt='servieses' />
                                <div className="card-body">
                                    <h6> Varanasi</h6>
                                    <div className="underline"></div>
                                    <p>
                                    The Ganga Aarti in Varanasi, also known as Banaras, is a captivating and revered Hindu ritual dedicated to the River Ganges.
                                     Conducted daily at the Dashashwamedh Ghat during the evening, this spiritual ceremony involves a series of devotional practices
                                      performed by priests. They use large fire lamps, incense, and rhythmic chants to honor the river, believed to be a goddess in Hinduism.

                                    </p>
                                    <Link to="/Servise" className="btn btn-link">Read More</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 ">
                            <div className="card shadow">
                                <img src={Servies3} className="w-100 boder-bottom" alt='servieses' />
                                <div className="card-body">
                                    <h6>Jaunpur</h6>
                                    <div className="underline"></div>
                                    <p>
                                    Shahi Qila, also known as Jaunpur Fort, is a historic fortress located in Jaunpur, Uttar Pradesh, India. Built in the 14th century by Firoz Shah Tughlaq,
                                    the fort stands on the banks of the Gomti River. It is renowned for its impressive architecture, including massive gates, ornate balconies, and intricate
                                    carvings that reflect a blend of Indo-Islamic styles. The Shahi Qila served as a stronghold for the Sharqi dynasty.

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