import React from "react";
import "./Team.css";
import abinu from "../Assets/team/abinunair.jpg";
import Anandhalekshmi from "../Assets/team/andhaleshmi.jpg";
import risha from "../Assets/team/risha cn.jpg";
import ashique from "../Assets/team/ashique2.jpg";
import shinshar from "../Assets/team/sinsar.jpg";
import teamfixpoint from "../Assets/team/team.jpg";

function Teamm() {
  return (
    <>
      <div id="team">
        <div className="hedaz">
          <div class="title">
            <h3>Laptop Tech Tribe</h3>
          </div>
          <div class="content">
            <h5>who we are</h5>
            <p>
              Our dedicated laptop service team is fully committed to providing
              outstanding support to ensure your complete satisfaction
            </p>
          </div>
        </div>

        <div className="main">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="500"
            class="profile"
          >
            <a href="https://wa.me/971544026588?text=Hello,%20can%20I%20get%20more%20info%3F:971544026588">
              <figure data-value="Ceo & Manager  ">
                <img src={abinu} alt="" />
                <figcaption>Abhinu R Nair</figcaption>
              </figure>
            </a>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="500"
            class="profile"
          >
            <a href="https://www.instagram.com/fixpoint.ae/">
              <figure data-value="Ceo & Tech Support">
                <img src={ashique} alt="" />
                <figcaption>Muhammed Ashique</figcaption>
              </figure>
            </a>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="500"
            class="profile"
          >
            <a href="https://wa.me/971582279912?text=Hello,%20can%20I%20get%20more%20info%3F:971582279912">
            <figure data-value="Tech Support">
              <img src={shinshar} alt="" />
              <figcaption>Shinshar</figcaption>
            </figure>
            </a>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="500"
            class="profile"
          >
            <figure data-value="Digital Marketing">
              <img src={Anandhalekshmi} alt="" />
              <figcaption>Anandhalekshmi S</figcaption>
            </figure>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="500"
            class="profile"
          >
            <figure data-value="Digital Marketing">
              <img src={risha} alt="" />
              <figcaption>Risha cn</figcaption>
            </figure>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="500"
            class="profile"
          >
            <figure data-value="">
              <img src={teamfixpoint} alt="" />
              <figcaption></figcaption>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}

export default Teamm;
