import React, { useEffect } from "react";
import "./Couter.css";
import "./Counter";
import AOS from "aos";

import { MdOutlineMedicalServices } from "react-icons/md";
import { IoMdHappy } from "react-icons/io";
import { FaHandshake } from "react-icons/fa";
import { GiAutoRepair } from "react-icons/gi";

function Conter() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  useEffect(() => {
    const valueDisplays = document.querySelectorAll(".num");
    const interval = 4000;

    valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(() => {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue === endValue) {
          clearInterval(counter);
        }
      }, duration);

      return () => {
        clearInterval(counter);
      };
    });
  }, []);

  return (
    <div id="about" class="mainu">
      <div class="wrapper-div">
        <div class="container-div" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="500">
          <MdOutlineMedicalServices className="pre-icon" />
          <span class="num" data-val="6">
            000
          </span>
          <span class="text"> YEAR OF EXPERIENCE</span>
        </div>

        <div class="container-div" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="500">
          <IoMdHappy className="pre-icon" />
          <span class="num" data-val="1299">
            000
          </span>
          <span class="text"> MONTHLY  HAPPY CLIENTS</span>
        </div>

        <div class="container-div" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="500">
          <FaHandshake className="pre-icon" />
          <span class="num" data-val="20">
            000
          </span>
          <span class="text">PARTNER COMPANY</span>
        </div>

        <div class="container-div" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="500">
          <GiAutoRepair className="pre-icon" />
          <span class="num" data-val="7">
            000
          </span>
          <span class="text">EXPERT TECHNICIANS</span>
        </div>
      </div>
    </div>
  );
}

export default Conter;
