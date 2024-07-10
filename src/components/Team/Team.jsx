import React from 'react'
import "../css/style.css";
// import  abinu from "../Assets/team/abinu.jpg"
import  abinu from "../Assets/team/abinu.jpg"
import  ashique from "../Assets/team/ashique.png"

function Team() {
  return (
    <section id="team" class="team section-bg">
          <div class="container" data-aos="fade-up">
            <div class="section-header">
              <h3>Team</h3>
              <p>
              Our dedicated laptop service team is fully committed to providing outstanding support to ensure your complete satisfaction
              </p>
            </div>

            <div class="row">
              <div
                class="col-lg-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div class="member">
                  <img src="assets/img/team-1.jpg" class="img-fluid" alt="" />
                  <div class="member-info">
                    <div class="member-info-content">
                      <h4>Walter White</h4>
                      <span>Chief Executive Officer</span>
                      <div class="social">
                        {/* <a href="">
                          <i class="bi bi-twitter"></i>
                        </a>
                        <a href="">
                          <i class="bi bi-facebook"></i>
                        </a> */}
                        <a href="">
                          <i class="bi bi-instagram"></i>
                        </a>
                        {/* <a href="">
                          <i class="bi bi-linkedin"></i>
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="col-lg-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div class="member">
                  <img src={abinu} class="img-fluid" alt="" />
                  <div class="member-info">
                    <div class="member-info-content">
                      <h4>Abinu nair</h4>
                      <span>Manager & partner</span>
                      <div class="social">
                        {/* <a href="">
                          <i class="bi bi-twitter"></i>
                        </a>
                        <a href="">
                          <i class="bi bi-facebook"></i>
                        </a> */}
                        <a href="https://www.instagram.com/abhinu_r97/">
                          <i class="bi bi-instagram"></i>
                        </a>
                        {/* <a href="">
                          <i class="bi bi-linkedin"></i>
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="col-lg-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div class="member">
                  <img src={ashique} class="img-fluid" alt="" />
                  <div class="member-info">
                    <div class="member-info-content">
                      <h4>Mohammed Ashique</h4>
                      <span>partner</span>
                      <div class="social">
                        {/* <a href="">
                          <i class="bi bi-twitter"></i>
                        </a> */}
                        {/* <a href="">
                          <i class="bi bi-facebook"></i>
                        </a> */}
                        <a href="https://www.instagram.com/ashique_muhmd_/">
                          <i class="bi bi-instagram"></i>
                        </a>
                        {/* <a href="">
                          <i class="bi bi-linkedin"></i>
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="col-lg-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div class="member">
                  <img src="assets/img/team-4.jpg" class="img-fluid" alt="" />
                  <div class="member-info">
                    <div class="member-info-content">
                      <h4>Amanda Jepson</h4>
                      <span>Accountant</span>
                      <div class="social">
                        {/* <a href="">
                          <i class="bi bi-twitter"></i>
                        </a>
                        <a href="">
                          <i class="bi bi-facebook"></i>
                        </a> */}
                        <a href="">
                          <i class="bi bi-instagram"></i>
                        </a>
                        {/* <a href="">
                          <i class="bi bi-linkedin"></i>
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Team