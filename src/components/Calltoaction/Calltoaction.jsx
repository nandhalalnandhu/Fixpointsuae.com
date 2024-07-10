import React from "react";
import "../css/style.css";

function Calltoaction() {
  return (
    <>
      <section id="call-to-action" class="call-to-action">
        <div class="container" data-aos="zoom-out" data-aos-duration="500">
          <div class="row">
            <div class="col-lg-9 text-center text-lg-start">
              <h3 class="cta-title">Take Action</h3>
              <p class="cta-text">
                Quick laptop fixes, guaranteed satisfaction. Get back to work
                hassle-free. Schedule now!
              </p>
            </div>
            <div class="col-lg-3 cta-btn-container text-center">
              <a class="cta-btn align-middle" href="tel:+971544026588">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Calltoaction;
