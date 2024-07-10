import React from 'react'
import "../css/style.css";

function More() {
  return (
    <div><section id="portfolio" class="portfolio section-bg">
    <div class="container" data-aos="fade-up">
      <header class="section-header">
        <h3 class="section-title">Other Services</h3>
      </header>

      <div class="row" data-aos="fade-up" data-aos-delay="100">
        <div class="col-lg-12">
          <ul id="portfolio-flters">
            <li data-filter="*" class="filter-active">
              All
            </li>
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-card">Card</li>
            <li data-filter=".filter-web">Web</li>
          </ul>
        </div>
      </div>

      <div
        class="row portfolio-container"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <div class="portfolio-wrap">
            <img
              src="assets/img/portfolio/app1.jpg"
              class="img-fluid"
              alt=""
            />
            <div class="portfolio-info">
              <h4>
                <a href="portfolio-details.html">App 1</a>
              </h4>
              <p>App</p>
              <div>
                <a
                  href="assets/img/portfolio/app1.jpg"
                  data-gallery="portfolioGallery"
                  title="App 1"
                  class="link-preview portfolio-lightbox"
                >
                  <i class="bi bi-plus"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  class="link-details"
                  title="More Details"
                >
                  <i class="bi bi-link"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          class="col-lg-4 col-md-6 portfolio-item filter-web"
          data-wow-delay="0.1s"
        >
          <div class="portfolio-wrap">
            <img
              src="assets/img/portfolio/web3.jpg"
              class="img-fluid"
              alt=""
            />
            <div class="portfolio-info">
              <h4>
                <a href="portfolio-details.html">Web 3</a>
              </h4>
              <p>Web</p>
              <div>
                <a
                  href="assets/img/portfolio/web3.jpg"
                  class="link-preview portfolio-lightbox"
                  data-gallery="portfolioGallery"
                  title="Web 3"
                >
                  <i class="bi bi-plus"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  class="link-details"
                  title="More Details"
                >
                  <i class="bi bi-link"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          class="col-lg-4 col-md-6 portfolio-item filter-app"
          data-wow-delay="0.2s"
        >
          <div class="portfolio-wrap">
            <img
              src="assets/img/portfolio/app2.jpg"
              class="img-fluid"
              alt=""
            />
            <div class="portfolio-info">
              <h4>
                <a href="portfolio-details.html">App 2</a>
              </h4>
              <p>App</p>
              <div>
                <a
                  href="assets/img/portfolio/app2.jpg"
                  class="link-preview portfolio-lightbox"
                  data-gallery="portfolioGallery"
                  title="App 2"
                >
                  <i class="bi bi-plus"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  class="link-details"
                  title="More Details"
                >
                  <i class="bi bi-link"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-card">
          <div class="portfolio-wrap">
            <img
              src="assets/img/portfolio/card2.jpg"
              class="img-fluid"
              alt=""
            />
            <div class="portfolio-info">
              <h4>
                <a href="portfolio-details.html">Card 2</a>
              </h4>
              <p>Card</p>
              <div>
                <a
                  href="assets/img/portfolio/card2.jpg"
                  class="link-preview portfolio-lightbox"
                  data-gallery="portfolioGallery"
                  title="Card 2"
                >
                  <i class="bi bi-plus"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  class="link-details"
                  title="More Details"
                >
                  <i class="bi bi-link"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          class="col-lg-4 col-md-6 portfolio-item filter-web"
          data-wow-delay="0.1s"
        >
          <div class="portfolio-wrap">
            <img
              src="assets/img/portfolio/web2.jpg"
              class="img-fluid"
              alt=""
            />
            <div class="portfolio-info">
              <h4>
                <a href="portfolio-details.html">Web 2</a>
              </h4>
              <p>Web</p>
              <div>
                <a
                  href="assets/img/portfolio/web2.jpg"
                  class="link-preview portfolio-lightbox"
                  data-gallery="portfolioGallery"
                  title="Web 2"
                >
                  <i class="bi bi-plus"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  class="link-details"
                  title="More Details"
                >
                  <i class="bi bi-link"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          class="col-lg-4 col-md-6 portfolio-item filter-app"
          data-wow-delay="0.2s"
        >
          <div class="portfolio-wrap">
            <img
              src="assets/img/portfolio/app3.jpg"
              class="img-fluid"
              alt=""
            />
            <div class="portfolio-info">
              <h4>
                <a href="portfolio-details.html">App 3</a>
              </h4>
              <p>App</p>
              <div>
                <a
                  href="assets/img/portfolio/app3.jpg"
                  class="link-preview portfolio-lightbox"
                  data-gallery="portfolioGallery"
                  title="App 3"
                >
                  <i class="bi bi-plus"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  class="link-details"
                  title="More Details"
                >
                  <i class="bi bi-link"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-card">
          <div class="portfolio-wrap">
            <img
              src="assets/img/portfolio/card1.jpg"
              class="img-fluid"
              alt=""
            />
            <div class="portfolio-info">
              <h4>
                <a href="portfolio-details.html">Card 1</a>
              </h4>
              <p>Card</p>
              <div>
                <a
                  href="assets/img/portfolio/card1.jpg"
                  class="link-preview portfolio-lightbox"
                  data-gallery="portfolioGallery"
                  title="Card 1"
                >
                  <i class="bi bi-plus"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  class="link-details"
                  title="More Details"
                >
                  <i class="bi bi-link"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          class="col-lg-4 col-md-6 portfolio-item filter-card"
          data-wow-delay="0.1s"
        >
          <div class="portfolio-wrap">
            <img
              src="assets/img/portfolio/card3.jpg"
              class="img-fluid"
              alt=""
            />
            <div class="portfolio-info">
              <h4>
                <a href="portfolio-details.html">Card 3</a>
              </h4>
              <p>Card</p>
              <div>
                <a
                  href="assets/img/portfolio/card3.jpg"
                  class="link-preview portfolio-lightbox"
                  data-gallery="portfolioGallery"
                  title="Card 3"
                >
                  <i class="bi bi-plus"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  class="link-details"
                  title="More Details"
                >
                  <i class="bi bi-link"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
{/* 
        <div
          class="col-lg-4 col-md-6 portfolio-item filter-web"
          data-wow-delay="0.2s"
        >
          <div class="portfolio-wrap">
            <img
              src="assets/img/portfolio/web1.jpg"
              class="img-fluid"
              alt=""
            />
            <div class="portfolio-info">
              <h4>
                <a href="portfolio-details.html">Web 1</a>
              </h4>
              <p>Web</p>
              <div>
                <a
                  href="assets/img/portfolio/web1.jpg"
                  class="link-preview portfolio-lightbox"
                  data-gallery="portfolioGallery"
                  title="Web 1"
                >
                  <i class="bi bi-plus"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  class="link-details"
                  title="More Details"
                >
                  <i class="bi bi-link"></i>
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  </section></div>
  )
}

export default More