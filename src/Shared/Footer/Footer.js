import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="page-footer bg-dark my-5">

                <div className="bg-dark">
                    <div className="container">
                        <div className="row py-4 d-flex align-items-center">
                            <div className="col-md-12 text-center">
                            <a href='https://www.facebook.com/dibayndu'>
                            <i className='fa fa-facebook-square text-white mr-4'></i>
                        </a>
                        <a href='https://myaccount.google.com/'>
                            <i className='fa fa-google-plus-square text-white mr-4'></i>
                        </a>
                        <a href='https://www.instagram.com/dibayndu_dib/'>
                            <i className='fa fa-instagram text-white mr-4'></i>
                        </a>
                        <a href='https://www.linkedin.com/in/dibayndu/'>
                            <i className='fa fa-linkedin text-white'></i>
                        </a>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-white text-center">---------------------------------------------------------</p>

                <div className="container text-center text-md-left mt-5">
                    <div className="row">
                        <div className="col-md-3 mx-auto mb-4">
                            <h6 className="text-uppercase font-weight-bold text-white">The Providers</h6>
                            <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto" style={{width:"125px",height:"2px"}}/>
                            <p className="mt-2 text-white">Web developer portfolio showcases what an innovative creative consulting firm can do for your business.From front-end to stack development, we've provided many website solutions to our clients over the years.Check out our web developer to discover some of our past custom web design projects. Be sure to get in touch for a custom website quote!</p>
                            </div>
                            <div className="col-md-2 mx-auto mb-4">
                            <h6 className="text-uppercase font-weight-bold text-white">Products</h6>
                            <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto" style={{width:"85px",height:"2px"}}/>
                            <ul className="list-unstyled">
                                <li className="my-2"><a href="#">HTML-5</a></li>
                                <li className="my-2"><a href="#">CSS</a></li>
                                <li className="my-2"><a href="#">BOOTSTRAP-5</a></li>
                                <li className="my-2"><a href="#">TAILWIND</a></li>
                                <li className="my-2"><a href="#">MATERIAL UI</a></li>
                                <li className="my-2"><a href="#">JAVASCRIPT</a></li>
                                <li className="my-2"><a href="#">REACT</a></li>
                            </ul>
                            </div>
                            
                            <div className="col-md-3 mx-auto mb-4">
                            <h6 className="text-uppercase font-weight-bold text-white">Links</h6>
                            <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto" style={{width:"75px",height:"2px"}}/>
                            <ul className="list-unstyled">
                                <li className="my-2"><a href="#">Home</a></li>
                                <li className="my-2"><a href="#">Blogs</a></li>
                                <li className="my-2"><a href="#">Projects</a></li>
                                <li className="my-2"><a href="#">About</a></li>
                                <li className="my-2"><a href="#">Contact</a></li>
                            </ul>
                            </div>
                            <div className="col-md-3 mx-auto mb-4 text-white">
                            <h6 className="text-uppercase font-weight-bold text-white">Contacts</h6>
                            <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto" style={{width:"75px",height:"2px"}}/>
                            <ul className="list-unstyled">
                                <li className="my-2"><i className="fas fa-home mr-3"></i>Chittagong,4000</li>
                                <li className="my-2"><i className="fas fa-envelope mr-3"></i>dibayndu818@gmail.com</li>
                                <li className="my-2"><i className="fas fa-phone-volume mr-3"></i>+8801521487845</li>
                               
                            </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright text-center py-3 text-white">
                        <p>&copy; copyright-
                            <a href="#">theprovider.com</a>
                        </p>
                        <p>Designed By The Providers</p>

                    </div>
                    </footer>
        </div>
    );
};

export default Footer;