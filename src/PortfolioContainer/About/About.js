import React from 'react';
import './About.css';



const About = () => {
    return (
         <div className="bg-dark my-5">
            <div className="d-lg-flex align-items-center px-5">
            <div  className="col-lg-6">
                <img className="img-fluid img" src="https://i.ibb.co/vspgR6y/about-me.png" alt="" />
                </div>
                <div className="col-lg-6 text-white mx-3">
                   
                    <h1 className="text-center">ABOUT ME</h1>
                    <h3 style={{textAlign:"center"}}>I'm a creative MERN Stack developer....</h3>
                    <br/>
                    <p>I am an allround web developer. I am a junior developer with good knowledge of front-end techniques. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you'll learn faster and much more. As the saying goes: 'two heads are better than one'.</p>
                 <br/>
                  <p>Got inspired? Copied the theme? Or do you just like the website? No problem, just buy me a beer and make me happy!</p>
                    <div>
                        {/* <!-- Button trigger modal --> */}
                        <a target="blank" href='https://drive.google.com/file/d/1FNR1T65WiCHZ4llxUCqVZ0xYzR5c4PVz/view?usp=sharing' download="Dibayndu Resume.pdf">
                                <button className="btn highlighted-btn text-white button">Get Resume</button>
                            </a>

                     

                    </div>

                </div>
               
            </div>

        </div>
    );
};

export default About;