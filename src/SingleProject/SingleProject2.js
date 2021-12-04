import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';


const SingleProject2 = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    }
    return (
       <div className="container">
           <h1 className="text-center display-4 text-white my-5">Some ScreenShot Of My Projects</h1>

<Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
 
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/N6jspQf/1.png"
      alt="First slide"
    />
    <Carousel.Caption>
          <h3 className="text-white">BANNER</h3>
          <p className="text-white">New Product Can Launch Here</p>
        </Carousel.Caption>
  </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/smGjd9R/2.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>SERVICES</h3>
          <p>All Services Are Showing Here in this Section</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/k2ZqbsW/3.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="text-black">Budgets</h3>
          <p className="text-black">User Can Proide Their Budgets In This Section</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/Hx25vLN/4.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="text-black">Features</h3>
          <p className="text-black"> All Up Coming New Features  Here</p>
        </Carousel.Caption>
      </Carousel.Item>
 
</Carousel>




    <div className="d-flex mx-4 justify-content-center ">
      <div>
      <a className="text-center" target="blank" href='https://move-your-time.web.app/'>
                                <button className="btn btn-dark text-white">Live Link</button>
                            </a>
      </div>
      <div className="mx-1">
      <a className="text-center" target="blank" href='https://github.com/dibayndu/move-your-time-client-site'>
                                <button className="btn btn-dark text-white">Code Link</button>
                            </a>
      </div>
      <div className="mx-1">
      <a className="text-center" target="blank" href='https://github.com/dibayndu/move-your-time-server-site'>
                                <button className="btn btn-dark text-white">Server Link</button>
                            </a>
      </div>
    </div>
    </div>
    );

}

export default SingleProject2;