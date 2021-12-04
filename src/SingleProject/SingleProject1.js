import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const SingleProject1 = () => {
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
      src="https://i.ibb.co/ChpKxt9/section-1.png"
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
          src="https://i.ibb.co/hKYNj8p/section-2.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="text-success">PRODUCTS</h3>
          <p className="text-success">All Products Are Showing Here in this Section</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/2gL3rr8/section-3.png"
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
          src="https://i.ibb.co/rdQF5d6/Section-5.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="text-black">REVIEWS</h3>
          <p className="text-black">User Can Proide Their Reviews In This Section</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/G5phQLx/dashboard.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="text-black">DASHBOARD</h3>
          <p className="text-black">Manage All System Here</p>
        </Carousel.Caption>
      </Carousel.Item>
 
</Carousel>




    <div className="d-flex mx-4 justify-content-center ">
      <div>
      <a className="text-center" target="blank" href='https://car-portal-9f151.web.app/'>
                                <button className="btn btn-dark text-white">Live Link</button>
                            </a>
      </div>
      <div className="mx-1">
      <a className="text-center" target="blank" href='https://github.com/dibayndu/car-zone-client-site'>
                                <button className="btn btn-dark text-white">Code Link</button>
                            </a>
      </div>
      <div className="mx-1">
      <a className="text-center" target="blank" href='https://github.com/dibayndu/car-zone-server-site'>
                                <button className="btn btn-dark text-white">Server Link</button>
                            </a>
      </div>
    </div>
    </div>
  );
};

export default SingleProject1;