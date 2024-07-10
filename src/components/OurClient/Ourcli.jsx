import React from "react";
import "./Ourcli.css";

import microsoft from "../Assets/logo/micro.png";
import acer from "../Assets/logo/acer.png";
import mac from "../Assets/logo/mac.png";
import alienware from "../Assets/logo/alienware.png";
import dell from "../Assets/logo/dell.png";
import hp from "../Assets/logo/hp.png";
import intel from "../Assets/logo/intel.png";
import legion from "../Assets/logo/legion.png";
import lenovo from "../Assets/logo/lenovo.png";
import msi from "../Assets/logo/msi.png";
import omen from "../Assets/logo/omen.png";
import razer from "../Assets/logo/razer.png";
import rog from "../Assets/logo/rog.png";
import surface from "../Assets/logo/surface.png";


function Ourcli() {
  return (
    <>
    <div className="boddy">
      <section id="section-partner">
        {/* <h1>Our Partners</h1> */}
        <div className="slider">
          <div className="slider-items">
          <img
              src={microsoft}
              alt=""
            />
            <img
              src={acer}
              alt=""
            />
            <img
              src={mac}
              alt=""
            />
            <img
              src={alienware}
              alt=""
            />
            <img
              src={dell}
              alt=""
            />
            <img
              src={hp}
              alt=""
            />
            <img
              src={intel}
              alt=""
            />
            <img
              src={legion}
              alt=""
            />
            <img
              src={lenovo}
              alt=""
            />
            <img
              src={msi}
              alt=""
            />
            <img
              src={omen}
              alt=""
            />
            <img
              src={razer}
              alt=""
            />
            <img
              src={rog}
              alt=""
            />
            <img
              src={surface}
              alt=""
            />
           
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

export default Ourcli;
