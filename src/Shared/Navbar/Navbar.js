import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div  className="navbarInner">
            <nav  className="navbar navbar-expand-lg navbar-light ">
  <a  className="navbar-brand text-white" href="#">Dibayndu</a>
  <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span  className="navbar-toggler-icon"></span>
  </button>
  <div  className="collapse navbar-collapse " id="navbarText">
    <ul  className="navbar-nav mr-auto">
      <li  className="nav-item active">
        <Link  className="nav-link text-white" to="/">Home<span  className="sr-only">(current)</span></Link>
      </li>
      <li  className="nav-item">
      <Link to="/projects"  className="nav-link text-white" >Projects</Link>
      </li>
      <li  className="nav-item">
      <Link to="/about"  className="nav-link text-white" >About</Link>
      </li>
      <li  className="nav-item">
      <Link to="/blogs"  className="nav-link text-white" >Blogs</Link>
      </li>
      <li  className="nav-item">
      <Link  className="nav-link text-white" to="/contactme">Contact Me</Link>
      </li>
    </ul>
  </div>
</nav>
        </div>
    );
};

export default Navbar;