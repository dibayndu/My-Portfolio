import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const SingleProject3 = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <div className="container">
      <h1 className="text-center display-4 text-white my-5">Some ScreenShot Of My Projects</h1>

<Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/PFz9nWS/1.png"
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
          src="https://i.ibb.co/VxpLJ0Z/3.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="text-success">EXPERTS</h3>
          <p className="text-success">All Experts Are Showing Here in this Section</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/2NM24xN/2.png"
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
          src="https://i.ibb.co/YQL4Tgs/4.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="text-black">Announcement</h3>
          <p className="text-black">User Can Proide Their Announcementss In This Section</p>
        </Carousel.Caption>
      </Carousel.Item>
 
</Carousel>




    <div className="d-flex mx-4 justify-content-center ">
      <div>
      <a className="text-center" target="blank" href='https://people-s-health-care.web.app/'>
                                <button className="btn btn-dark text-white">Live Link</button>
                            </a>
      </div>
      <div className="mx-1">
      <a className="text-center" target="blank" href='https://github.com/dibayndu/peoples-health-care'>
                                <button className="btn btn-dark text-white">Code Link</button>
                            </a>
      </div>
    </div>
    </div>
    );
};

export default SingleProject3;