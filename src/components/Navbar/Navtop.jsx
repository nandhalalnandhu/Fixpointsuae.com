import React from "react";
import "./Nav.css"

import { FaMapMarkerAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

function Navtop() {
  return (
    <div
      id="navtop"
      class="top-bar row gx-0 align-items-center d-none d-lg-flex"
    >
      <div class="col-lg-6 px-5 text-start">
        <small>
          {" "}
          <FaMapMarkerAlt class="nav-top-icons" />
          Sharjah Post Office Rolla,Sharjah, UAE
        </small>
        <small class="ms-4">
          <FaClock class="nav-top-icons" />
          9.00 am - 9.00 pm
        </small>
      </div>
      <div class="col-lg-6 px-5 text-end">
        <small>
          <a href="mailto:fixpoint.ae@gmail.com">
            <IoMail class="nav-top-icons" />
            fixpoint.ae@gmail.com
          </a>
        </small>
        <small class="ms-4">
          <a href="tel:+917025880828">
            <FaPhoneAlt class="nav-top-icons" /> +971 54 402 6588
          </a>
        </small>
      </div>
    </div>
  );
}

export default Navtop;
