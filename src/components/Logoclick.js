import React from 'react';
import './style.css';
import img1 from '../images/img1.jpg';

function Logoclick() {
  return (
    <div className='baap'>
      <nav>
        <a href="#overview">OVERVIEW</a>
        <a href="#360view">360°VIEW</a>
        <a href="#services">VARIENTS</a>
        <a href="#contact">OFFERS</a>
        <a href="#contact">SIMILAR CARS</a>
        <a href="#contact">COLORS</a>
        <a href="#contact">BROUCHER</a>
        <a href="#contact">MILEAGE</a>
        <a href="#contact">USER REVIEWS</a>
        <div className="dropdown">
          <a href="#" className="dropbtn">Services</a>
          <div className="dropdown-content">
            <a href="#">Service 1</a>
            <a href="#">Service 2</a>
            <a href="#">Service 3</a>
          </div>
        </div>
      </nav>

      <div className='box_parent'>
        <div className="box">
          <img src={img1}></img>
          <div className='element2'>
            <h4>Rs. 7.74 - 13.04 Lakh</h4>
            <h6>Urban Cruiser Taisor On Road Price</h6>
            <p>Ex-Showroom price, Mumbai</p>
            <section>
              <p1>Calculate your EMI</p1>
              <p></p>
              <a href="./EMI Calculator">EMI Calculator</a>
              <button>Get EMI Offers</button>
            </section>
            <p><b>Avg. Waiting Period: 2-10 Weeks</b></p>
          </div>
        </div>
      </div>


      <div class="filter-container">
        <h4>Toyota Taisor Price</h4>
        <p className='description'>Toyota Taisor price for the base model starts at Rs. 9.10 Lakh and the top model price goes upto Rs. 15.41 Lakh (on-road Mumbai). Taisor price for 12 variants is listed below.</p>
        <p className='filter'>Filter By Fuel type & Transmission</p>
        <button class="filter-btn">Petrol</button>
        <button class="filter-btn">CNG</button>
        <button class="filter-btn">Manual</button>
        <button class="filter-btn">Automatic (AMT)</button>
        <button class="filter-btn">Automatic (TC)</button>
      </div>


      <div className='yo'>
        <table>
          <tr>
            <th>Variants</th>
            <th>On-Road Price</th>
            <th>Compare</th>
          </tr>
          <tr>
            <td>Urban Cruiser Taisor E 1.2 Pet...</td>
            <td>Rs. 9.10 Lakh</td>
            <td class="compare">Add to compare</td>
          </tr>
          <tr>
            <td>Urban Cruiser Taisor E 1.2 CNG...</td>
            <td>Rs. 9.90 Lakh</td>
            <td class="compare">Add to compare</td>
          </tr>
          <tr>
            <td>Urban Cruiser Taisor S 1.2 Pet...</td>
            <td>Rs. 10.12 Lakh</td>
            <td class="compare">Add to compare</td>
          </tr>
          <tr>
            <td>Urban Cruiser Taisor S Plus 1....</td>
            <td>Rs. 10.58 Lakh</td>
            <td class="compare">Add to compare</td>
          </tr>
          <tr>
            <td>Urban Cruiser Taisor S Plus 1....</td>
            <td>Rs. 10.58 Lakh</td>
            <td class="compare">Add to compare</td>
          </tr>
          <tr>
            <td>Urban Cruiser Taisor S Plus 1....</td>
            <td>Rs. 10.58 Lakh</td>
            <td class="compare">Add to compare</td>
          </tr>
          <tr>
            <td>Urban Cruiser Taisor S Plus 1....</td>
            <td>Rs. 10.58 Lakh</td>
            <td class="compare">Add to compare</td>
          </tr>
          <tr>
            <td>Urban Cruiser Taisor S Plus 1....</td>
            <td>Rs. 10.58 Lakh</td>
            <td class="compare">Add to compare</td>
          </tr>
          <tr>
            <td>Urban Cruiser Taisor S Plus 1....</td>
            <td>Rs. 10.58 Lakh</td>
            <td class="compare">Add to compare</td>
          </tr>
          <tr>
            <td>Urban Cruiser Taisor S Plus 1....</td>
            <td>Rs. 10.58 Lakh</td>
            <td class="compare">Add to compare</td>
          </tr>
        </table>
      </div>



      <div class="header">
        <div class="container">
          <h5>Contact Toyota</h5>
          <div class="cta">
            <p>Get in touch for the best buying option from your authorized dealer</p>
            <a href="#" class="btn">Get Assistance</a>
          </div>
        </div>
      </div>

      <div class="main">
        <div class="container">
          <p>Toyota Taisor Car Specifications</p>
          <div class="features">
            <div class="feature">
              <p1>Price</p1>
              <p>Rs. 9.10 Lakh onwards</p>
            </div>
            <div class="feature">
              <p1>Engine</p1>
              <p>1197 cc & 998 cc</p>
            </div>
            <div class="feature">
              <p1>Fuel Type</p1>
              <p>Petrol & CNG</p>
            </div>
            <div class="feature">
              <p1>Transmission</p1>
              <p>Manual & Automatic</p>
            </div>
            <div class="feature">
              <p1>Seating Capacity</p1>
              <p>5 Seater</p>
            </div>
          </div>
        </div>
      </div>


    </div >



  )
}

export default Logoclick;