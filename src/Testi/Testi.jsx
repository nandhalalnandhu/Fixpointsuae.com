import React from "react";
import "./Testi.css";
import my from "../components/Assets/testimonial/nandh.png";
import das from "../components/Assets/testimonial/rashid.jpg";
import ameen from "../components/Assets/testimonial/ameen.jpg";
import shibin from "../components/Assets/testimonial/shibin.png";
import afsu from "../components/Assets/testimonial/afzal.png";

function Testi() {
  return (
    <>
      <div id="review" class="outerdiv">
        <div class="innerdiv">
          {/* <!-- div1 --> */}
          <div data-aos="zoom-in" data-aos-delay="100" data-aos-duration="500" class="div1 eachdiv">
            <div class="userdetails">
              <div class="imgbox">
                <img src={my} alt="" />
              </div>
              <div class="detbox">
                <p class="name">thrilok</p>
                <p class="designation">Happy customer</p>
              </div>
            </div>
            <div class="review">
              <h4>
                Purchasing a laptop was a significant decision for me, and I
                could be happier with my choice. What's more, the affordability
                of this laptop pleasantly surprised me..
              </h4>
              <p>
                “it boasts a sleek design and impressive performance that rival
                even higher-end models. Whether I'm working on demanding tasks
                or simply enjoying multimedia, it handles everything
                effortlessly. The customer service experience was also
                top-notch, with knowledgeable staff guiding me through the
                selection process and ensuring I found the perfect fit for my
                needs ”
              </p>
            </div>
          </div>
          {/* <!-- div2 --> */}
          <div data-aos="zoom-in" data-aos-delay="100" data-aos-duration="500" class="div2 eachdiv">
            <div class="userdetails">
              <div class="imgbox">
                <img src={das} alt="" />
              </div>
              <div class="detbox">
                <p class="name">Muhammed Rashid</p>
                <p class="designation">Happy customer</p>
              </div>
            </div>
            <div class="review">
              <h4>
                The team at Fix point kept me supported throughout the laptop
                service
              </h4>
              <p>
                “ Their encouragement was invaluable, and their professionalism
                was top-notch. Highly recommend!”
              </p>
            </div>
          </div>
          {/* <!-- div3 --> */}
          <div data-aos="zoom-in" data-aos-delay="100" data-aos-duration="500" class="div3 eachdiv">
            <div class="userdetails">
              <div class="imgbox">
                <img src={ameen} alt="" />
              </div>
              <div class="detbox">
                <p class="name dark">Ameen</p>
                <p class="designation dark">Happy customer</p>
              </div>
            </div>
            <div class="review dark">
              <h4>I was impressed by the promptness of the service !</h4>
              <p>
                “I was impressed by the promptness of the service. The
                technician arrived right on time, ready to assess and address
                the issues with my laptop. Throughout the service, the
                technician conducted themselves with the utmost professionalism.
                They were courteous, knowledgeable, and took the time to explain
                the repairs needed in a clear and concise manner. My laptop was
                returned to me in perfect working condition, and I haven't
                encountered any issues since.Even after the service was
                completed, the customer support team remained readily available
                to address any follow-up questions . ”
              </p>
            </div>
          </div>
          {/* <!-- div4 --> */}
          <div data-aos="zoom-in" data-aos-delay="100" data-aos-duration="500" class="div4 eachdiv">
            <div class="userdetails">
              <div class="imgbox">
                <img src={shibin} alt="" />
              </div>
              <div class="detbox">
                <p class="name dark">Shibin Ali</p>
                <p class="designation dark">Happy customer</p>
              </div>
            </div>
            <div class="review dark">
              <h4>I was really happy with the laptop service from Fix point</h4>
              <p>
                “ The technician was friendly and fixed the issues with my
                laptop efficiently. Now my laptop works perfectly, and I haven't
                had any problems since. ”
              </p>
            </div>
          </div>
          {/* <!-- div5 --> */} 
          <div data-aos="zoom-in" data-aos-delay="100" data-aos-duration="500" class="div5 eachdiv">
            <div class="userdetails">
              <div class="imgbox">
                <img src={afsu} alt="" />
              </div>
              <div class="detbox">
                <p class="name">Mohammed afsal</p>
                <p class="designation">Happy customer</p>
              </div>
            </div>
            <div class="review">
              <h4>
                I was pleasantly surprised by the affordability and high value
                of Fix point 's laptop service.
              </h4>
              <p>
                {" "}
                The customer support team was readily available to address any
                follow-up inquiries I had, ensuring that I felt fully supported
                throughout the entire process. Thanks to their convenience and
                excellent customer support, my laptop is now in perfect working
                condition. I highly recommend ”
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="attribution">
        CONNECT
        <a
          href="https://wa.me/971544026588?text=Hello,%20can%20I%20get%20more%20info%3F"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/3536/3536445.png"
            alt=""
            width={50}
          />
        </a>
      </div>
    </>
  );
}

export default Testi;
