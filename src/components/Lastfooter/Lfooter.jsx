import React from "react";
import "./Lfooter.css";
import fix0 from "../Assets/fixpointlatesrt.png";

function Lfooter() {
  return (
    <>
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3>
            {/* Company<span>logo</span> */}
            <img src={fix0} alt="" width={250} />
          </h3>

          <p class="footer-links">
            <a href="#navtop" class="link-1">HOME</a>

            <a href="#about">ABOUT</a>

            <a href="#services">SERVICES</a>

            {/* <a href="#">UPGARDE</a> */}

            <a href="#team">TEAM</a>

            <a href="#enquiry">ENQUIRY</a>
          </p>

          {/* <p class="footer-company-name">Fixpoint © 2024</p> */}
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span>Sharjah post office</span> Rolla, Sharjah,UAE
            </p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>+971 54 402 6588</p>
          </div>

          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">fixpoint.ae@gmail.com</a>
            </p>
          </div>
        </div>

        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the company</span>
            FixPoint Laptop Service offers swift, high-quality repairs to extend
            your laptop's lifespan. trust our skilled technicians for top-notch
            solutions
          </p>

          <div class="footer-icons">
            <a href="https://www.facebook.com/profile.php?id=100075973385776">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="https://wa.me/971544026588?text=Hello,%20can%20I%20get%20more%20info%3F">
              <i class="fa fa-whatsapp"></i>
            </a>
            <a href="https://www.instagram.com/fixpoint.ae/">
              <i class="fa fa-instagram"></i>
            </a>
            <a href="tel:+971544026588">
              <i class="fa fa-phone"></i>
            </a>
          </div>
        </div>
      </footer>
      <div className="rightt">
      <p>COPYRIGHT &copy; 2024 FIXPOINT. ALL RIGHTS RESERVED</p>

      </div>
    </>
  );
}

export default Lfooter;
