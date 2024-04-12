import React, { useEffect } from 'react';
// import carouselExampleSlidesOnly from 'style.css'
import logo from '../images/logo.jpg';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';


function Navbar() {
  useEffect(() => {
    const carousel = document.querySelector('#carouselExampleSlidesOnly');
    const carouselInstance = new window.bootstrap.Carousel(carousel, {
      interval: 500 // Adjust the interval here
    });

    return () => {
      carouselInstance.dispose(); // Clean up on component unmount
    };
  }, []); // Run this effect only once after initial render
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} width="150" height="25" className="d-inline-block align-text-top" />
        </a>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-interval="5" style={{ width: '80px' }} >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={img1} className="d-block w-1" alt="Slide 1" />
              </div>
              <div className="carousel-item">
                <img src={img2} className="d-block w-1" alt="Slide 2" />
              </div>
              <div className="carousel-item">
                <img src={img3} className="d-block w-1" alt="Slide 3" />
              </div>
            </div>
          </div>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown" style={{ paddingRight: '10px' }}>
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <b>NEW CARS</b>
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Find new cars</a></li>
                <li><a className="dropdown-item" href="#">Upcoming cars</a></li>
                <li><a className="dropdown-item" href="#">Electric cars</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown" style={{ paddingRight: '10px' }}>
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <b>USED CARS</b>
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Dealer</a></li>
                <li><a className="dropdown-item" href="#">Insurance</a></li>
                <li><a className="dropdown-item" href="#">Special Review</a></li>
                <li><a className="dropdown-item" href="#">Used cars</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown" style={{ paddingRight: '10px' }}>
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <b>REVIEWS AND NEWS</b>
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">NEWS</a></li>
                <li><a className="dropdown-item" href="#">User REVIEWS</a></li>
                <li><a className="dropdown-item" href="#">Special Reports</a></li>
                <li><a className="dropdown-item" href="#">EXPERT REVIEWS</a></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;