import React, { useState } from "react";
import Swal from "sweetalert2";

function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    device: "",

    complaints: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.device ||
      !formData.complaints
    ) {
      alert("Please fill in all fields");

      return;
    }

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbz1YqA9GJPMAeVrUB430PSzHYaQimuJ9W9tf2c5K_5j23bQ8rLGE5UnbUEScDI3qw7wlA/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(formData),
        }
      );

      if (response.ok) {
        Swal.fire({
          title: "Thank you! We'll get back to you soon.",
          text: "",
          icon: "success",
        });
        // alert("done");

        setTimeout(function () {
          window.location.reload();
        }, 3000);
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      alert("Something went wrong");
      console.error(error);
    }
  };

  return (
    <>
      <footer id="enquiry" className="section-bg">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57689.088823971004!2d55.316479221679685!3d25.35227170000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b2c968778a5%3A0x954f0b81dfc56128!2sFix%20Point%20Computer%20sales%20and%20chip%20level%20service%20centre!5e0!3m2!1sen!2sin!4v1713005141176!5m2!1sen!2sin"
                    width="400"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                  ></iframe>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form">
                  <h4>Enquiry now</h4>

                  <form method="POST" className="php-email-form">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder=" Name"
                        required
                      />
                    </div>
                    <div className="form-group mt-3">
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        id="phone"
                        placeholder=" Phone(+971)"
                        required
                      />
                    </div>
                    <div className="form-group mt-3">
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        id="email"
                        value={formData.emailmail}
                        onChange={handleChange}
                        placeholder=" Email"
                        required
                      />
                    </div>
                    <div className="form-group mt-3">
                      <input
                        type="text"
                        className="form-control"
                        name="device"
                        id="device"
                        value={formData.device}
                        onChange={handleChange}
                        placeholder="Device (eg:Macbook pro)"
                        required
                      />
                    </div>
                    {/* <div className="form-group mt-3">
                      <input
                        type="file"
                        name="photo"
                        placeholder="attach img"
                        onChange={handleChange}
                        value={formData.photo}
                      />
                    </div> */}
                    <div className="form-group mt-3"></div>
                    <div className="form-group mt-3">
                      <textarea
                        className="form-control"
                        name="complaints"
                        id="complaints"
                        value={formData.complaints}
                        onChange={handleChange}
                        rows="5"
                        placeholder="Complaints"
                        required
                      ></textarea>
                    </div>
                    {/* <div className="my-3">
                      <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">
                        Your message has been sent. Thank you!
                      </div>
                    </div> */}
                    <div className="text-center">
                      <button
                        onClick={handleSubmit}
                        type="submit"
                        title="Send Message"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong>Rapid</strong>. All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
