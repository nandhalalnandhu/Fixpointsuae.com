import React from 'react'
import { FaDiagramNext } from "react-icons/fa6";
import { GiCardboardBox } from "react-icons/gi";
import { BsDeviceSsdFill } from "react-icons/bs";

function Pricing() {
  return (
    <section id="pricing" class="pricing section-bg wow fadeInUp">
    <div class="container" data-aos="fade-up">
      <header class="section-header">
        <h3>Best pricing</h3>
        <p>
        Upgrade your laptop with our quality products for improved performance
        </p>
      </header>

      <div class="row flex-items-xs-middle flex-items-xs-center">
        {/* <!-- Basic Plan  --> */}
        <div
          class="col-xs-12 col-lg-4"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="500"
        >
          <div class="card">
            <div class="card-header">
              <h3>
                <span class="currency"> </span><FaDiagramNext className='price-icon' />
                <span class="period"></span>
              </h3>
            </div>
            <div class="card-block">
              <h4 class="card-title">RAM</h4>
              <ul class="list-group">
                <li class="list-group-item">8GB DDR4 3200 MHz</li>
                <li class="list-group-item">16GB DDR4 3200 MHz </li>
                {/* <li class="list-group-item">Et perspiciatis suscipit</li>
                <li class="list-group-item">24/7 Support System</li> */}
              </ul>
              <a href="https://wa.me/971544026588?text=Hello,%20can%20I%20get%20more%20info%3F" class="btn">
                shop
                
              </a>
            </div>
          </div>
        </div>

        {/* <!-- Regular Plan  --> */}
        <div
          class="col-xs-12 col-lg-4"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          <div class="card">
            <div class="card-header">
              <h3>
                <span class="currency"></span><GiCardboardBox className='price-icon' />
                <span class="period"></span>
              </h3>
            </div>
            <div class="card-block">
              <h4 class="card-title">Graphics card</h4>
              <ul class="list-group">
                <li class="list-group-item">GeForce-GV-N710D3-2GL-PC 2GB</li>
                <li class="list-group-item">GeForce Gtx 1650 D6 Windforce Oc 4GB</li>
                {/* <li class="list-group-item">Et perspiciatis suscipit</li>
                <li class="list-group-item">24/7 Support System</li> */}
              </ul>
              <a href="https://wa.me/971544026588?text=Hello,%20can%20I%20get%20more%20info%3F" class="btn">
                shop
              </a>
            </div>
          </div>
        </div>

        {/* <!-- Premium Plan  --> */}
        <div
          class="col-xs-12 col-lg-4"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="500"
        >
          <div class="card">
            <div class="card-header">
              <h3>
                <span class="currency"></span><BsDeviceSsdFill />
                <span class="period"></span>
              </h3>
            </div>
            <div class="card-block">
              <h4 class="card-title">SSD</h4>
              <ul class="list-group">
                <li class="list-group-item">crucial-bx500-240gb-3d-nand-sata-ssd</li>
                <li class="list-group-item">Crucial P3 Plus 500GB  NAND NVMe M.2 SSD</li>
                {/* <li class="list-group-item">Et perspiciatis suscipit</li>
                <li class="list-group-item">24/7 Support System</li> */}
              </ul>
              <a href="https://wa.me/971544026588?text=Hello,%20can%20I%20get%20more%20info%3Fhttps://wa.me/7025880828" class="btn">
                shop
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Pricing