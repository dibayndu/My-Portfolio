
import './App.css';
import Navbar from './Shared/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './PortfolioContainer/Home/Home';
import Footer from '../src/Shared/Footer/Footer';
import Projects from '../src/PortfolioContainer/Projects/Projects';
import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import ContactMe from './PortfolioContainer/ContactMe/ContactMe';
import SingleProject1 from './SingleProject/SingleProject1';
import SingleProject2 from './SingleProject/SingleProject2';
import SingleProject3 from './SingleProject/SingleProject3';
import About from './PortfolioContainer/About/About';
import Blogs from './Blogs/Blogs';


function App() {
  return (
    <div className="App bg">
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/singleProject1" element={<SingleProject1/>} />
      <Route path="/singleProject2" element={<SingleProject2/>} />
      <Route path="/singleProject3" element={<SingleProject3/>} />
      <Route path="/contactme" element={<ContactMe />} />
      <Route path="/about" element={<About />} />
      <Route path="/blogs" element={<Blogs />} />
      {/* <Route path="/projects" element={<Projects />} /> */}
      </Routes>
      
      <Footer/>
    </BrowserRouter>
    {/* <Navbar/>
    <Home/>
    <ContactMe/>
    <Footer/> */}
    </div>
  );
}

export default App;
