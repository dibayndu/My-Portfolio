import React from 'react';
import Typical from 'react-typical';
import "../../index.css";
import Projects from '../Projects/Projects';
import './Home.css';
import { Col, Container, Row } from 'react-bootstrap';
import About from '../About/About';
import ContactMe from '../ContactMe/ContactMe';

export default function Home() {
    return (
        <div>
        <div className='profile-container bg-dark'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                        <a href='https://www.facebook.com/dibayndu'>
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href='https://myaccount.google.com/'>
                            <i className='fa fa-google-plus-square'></i>
                        </a>
                        <a href='https://www.instagram.com/dibayndu_dib/'>
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href='https://www.linkedin.com/in/dibayndu/'>
                            <i className='fa fa-linkedin'></i>
                        </a>

                        </div>
                    
                    </div>
                    <div className="profile-details-name">
                            <span className="primary-text">
                                {" "}
                                Hello,I'M <span className="highlighted-text">Dibayndu</span>
                            </span>
                        </div>
                        <div className='profile-details-role'>
                            <span className='primary-text'>
                                {" "}
                                <h1>I'm
                                {" "}
                                <Typical
                                loop={Infinity}
                                steps={[
                                    "Jr. Front-End Developer",
                                    1000,
                                    "MERN Stack Developer",
                                    1000,
                                ]}
                                />
                                </h1>
                                <span className='profile-role-tagline'>
                                    Knack of building applications with front and back end operations 
                                </span>
                            </span>
                        </div>
                        <div className="profile-options">
                            {/* <button className="btn primary-btn text-white">
                                {""}
                                Hire Me {" "}
                            </button> */}
                            <a target="blank" href='#contactme' >
                                <button className="btn highlighted-btn text-white">Hire Me</button>
                            </a>
                            <a target="blank" href='https://drive.google.com/file/d/1FNR1T65WiCHZ4llxUCqVZ0xYzR5c4PVz/view?usp=sharing' download="Dibayndu Resume.pdf">
                                <button className="btn highlighted-btn text-white">Get Resume</button>
                            </a>
                        </div>
                        </div>
                        <div className='profile-picture'>
                            <div className="profile-picture-background"></div>
                        </div>
                        
            </div>
        </div>
        <Projects/>
        <About/>
        
        <ContactMe />
        </div>
    )
}
