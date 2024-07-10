import React from "react";
import "../css/style.css";

import ogvideo3 from "../Assets/ogg2.mp4";
import { IoCall } from "react-icons/io5";

function Main() {
  return (
    <>
      <section id="hero" class="clearfix">
        
        <video src={ogvideo3} autoPlay muted playsInline />

        {/* <video autoplay muted playsinline>
          <source src={ogvideo3} type="video/mp4" />
        </video> */}

        <div
          id="hero-cont"
          class="col-lg-6 intro-info "
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <h2>
            Laptop Service <br />
            <span> Center</span>
          </h2>
          <h3>
            " Your Trusted Repair Solution | Fast & Reliable Service | Book
            Today!"
          </h3>
          <div>
            <a href="tel:+971544026588" class="btn-get-started scrollto">
              <IoCall />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
