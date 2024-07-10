import React from 'react'
import "../css/style.css";

function Faq() {
  return (
    <section id="faq" class="faq">
          <div class="container" data-aos="fade-up" data-aos-duration="500">
            <header class="section-header">
              <h5>Frequently Asked Questions</h5>
              {/* <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque
              </p> */}
            </header>

            <ul class="faq-list" data-aso="fade-up" data-aos-delay="100">
              <li>
                <div
                  data-bs-toggle="collapse"
                  class="collapsed question"
                  href="#faq1"
                >
                  Why is my laptop overheating?
                  <i class="bi bi-chevron-down icon-show"></i>
                  <i class="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq1" class="collapse" data-bs-parent=".faq-list">
                  <p>
                  Overheating can be caused by dust buildup in the cooling system, a malfunctioning fan, or heavy CPU/GPU usage. Regular cleaning and ensuring proper ventilation can help prevent overheating.
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faq2"
                  class="collapsed question"
                >
                  My laptop is running slow. What can I do?  <i class="bi bi-chevron-down icon-show"></i>
                  <i class="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq2" class="collapse" data-bs-parent=".faq-list">
                  <p>
                  Slow performance can be due to various reasons like insufficient RAM, too many background processes, malware infections, or a fragmented hard drive. Regular maintenance like disk cleanup, malware scans, and updating software can help improve performance.
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faq3"
                  class="collapsed question"
                >
                    Should I upgrade my laptop's hardware? <i class="bi bi-chevron-down icon-show"></i>
                  <i class="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq3" class="collapse" data-bs-parent=".faq-list">
                  <p>
                 Upgrading hardware like RAM or storage can improve performance and extend the lifespan of your laptop. However, it's essential to ensure compatibility with your laptop model and consider whether the cost of upgrading outweighs purchasing a new laptop.
                  </p>
                </div>
              </li>

            

              

              
            </ul>
          </div>
        </section>
  )
}

export default Faq