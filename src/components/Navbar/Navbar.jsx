import React from "react";
// import "../css/style.css";
import "./Nav.css";


import fix3 from "../Assets/fix3.png";

function Navbar() {
  
  return (
    <header
      id="header"
      class="fixed-top d-flex align-items-center header-transparent"
    >
      <div class="container d-flex align-items-center">
        <h1 class="logo me-auto">
          <a href="index.html">
            <img src={fix3} alt="" />
          </a>
        </h1>

        <nav id="navbar" class="navbar order-last order-lg-0">
          <ul>
            <li>
              <a class="nav-link scrollto active" href="#navtop">
                Home
              </a>
            </li>
            <li>
              <a class="nav-link scrollto" href="#about">
                About
              </a>
            </li>
            <li>
              <a class="nav-link scrollto" href="#services">
                Services
              </a>
            </li>
            <li>
              <a class="nav-link scrollto " href="#pricing">
                Upgrade
              </a>
            </li>
            <li>
              <a class="nav-link scrollto" href="#team">
                Team
              </a>
            </li>

            <li>
              <a class="nav-link scrollto" href="#enquiry">
              ENQUIRY
              </a>
            </li>
          </ul>

          {/* <i class="bi bi-list mobile-nav-toggle"></i> */}

          <button
            id="bi bi-list mobile-nav-toggle"
            class="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasTop"
            aria-controls="offcanvasTop"
          >
            <i class="bi bi-list mobile-nav-toggle"></i>
          </button>

          <div
            class="offcanvas offcanvas-top"
            tabindex="-1"
            id="offcanvasTop"
            aria-labelledby="offcanvasTopLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasTopLabel">
                MENU
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <a className="off-body-a" href="#hero">Home</a>
              <a className="off-body-a"  href="#about">About</a>
              <a className="off-body-a" href="#services">Service</a>
             
              <a className="off-body-a" href=" #enquiry">ENQUIRY</a>
            </div>
          </div>
          {/* </i> */}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
