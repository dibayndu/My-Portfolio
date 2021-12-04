import React, { Component, useState } from 'react';
/* import ReactDOM from 'react-dom'; */
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './Projects.css';
/* import { Carousel } from 'react-responsive-carousel'; */
import pic1 from '../../images/car-portal.png';
import pic2 from '../../images/move-your-time.png';
import pic3 from '../../images/people-s-health-care.png';
import Home from '../Home/Home';
import { Link } from 'react-router-dom';

// const projects = [
//     {
//         name: "Car-Zone",
//         description: "Get Your ALL Brand Your Car and Car Related Services ",
//         image: {pic1}
//     },
//     {
//         name: "Move Your Time",
//         description: "Here You Can Find All Types Of Air Ticket,Tour pakages and make Colorfull Your Holiday",
//         image: {pic2}
//     },
//     {
//         name: "Peoples Health Care",
//         description: "In This Projects You Can Get All Kind Of Health Services And Get Various Types Of Consultant,book their Appoinment Also",
//         image: {pic3}
//     },
    



const Projects = () => {
    return (
        <div className="container">
        <h1 className="text-center text-uppercase text-white display-4 mt-3">Projects</h1>
        <p className="text-center text-white mb-5">Here Some Of My Recent Works</p>

        <div class="card-deck">
            
  <div class="card">
    <img src={pic1} class="card-img-top" alt=""/>
    <div class="card-body">
      <h5 class="card-title">Car-Zone</h5>
      <p class="card-text">In This Project You Can Get Your ALL Brand Brand New Car and Car Related Services,like- Car Wash,Engine Treatment etc.. </p>
    </div>
    <div class="card-footer">
    <Link to="/singleProject1"  className="nav-link text-white btn highlighted-btn text-white button text-center" >Details</Link>
    </div>
  </div>


  <div class="card">
    <img src={pic2} class="card-img-top" alt=""/>
    <div class="card-body">
      <h5 class="card-title">Move Your Time</h5>
      <p class="card-text">It is a Travel And Ticketing Site ,Here You Can Find All Types Of Air Ticket,Tour pakages and make Colorfull Your Holiday.</p>
    </div>
    <div class="card-footer">
    <Link to="/singleProject2"  className="nav-link text-white btn highlighted-btn text-white button text-center" >Details</Link>
    </div>
  </div>


  <div class="card">
    <img src={pic3} class="card-img-top" alt=""/>
    <div class="card-body">
      <h5 class="card-title">Peoples Health Care</h5>
      <p class="card-text">In This Projects You Can Get All Kind Of Health Services And Get Various Types Of Consultant,book their Appoinment Also.</p>
    </div>
    <div class="card-footer">
    {/* <a target="blank" href='#'>
                                <button className="btn highlighted-btn text-white button">See Details</button>
                            </a> */}
                            <Link to="/singleProject3"  className="nav-link text-white nav-link text-white btn highlighted-btn text-white button text-center" >Details</Link>
    </div>
  </div>
</div>
</div>
    );
};

export default Projects;



