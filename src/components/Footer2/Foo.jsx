import React from "react";
import "./Foo.css";
import { MdOutlineAddIcCall } from "react-icons/md";
import { IoLogoFacebook } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Foo() {
  return (
    <footer class="footer">
      <div class="waves">
        <div class="wave" id="wave1"></div>
        <div class="wave" id="wave2"></div>
        <div class="wave" id="wave3"></div>
        <div class="wave" id="wave4"></div>
      </div>
      <ul class="social-icon">
        <li class="social-icon__item">
          <a
            class="social-icon__link"
            href="https://www.facebook.com/profile.php?id=100075973385776"
          >
            <IoLogoFacebook className="foo-icon" />
          </a>
        </li>
        <li class="social-icon__item">
          <a
            class="social-icon__link"
            href="https://wa.me/971544026588?text=Hello,%20can%20I%20get%20more%20info%3F"
          >
            <FaWhatsapp className="foo-icon" />
          </a>
        </li>
        <li class="social-icon__item">
          <a class="social-icon__link" href="tel:+971544026588">
            <MdOutlineAddIcCall className="foo-icon" />
          </a>
        </li>
        <li class="social-icon__item">
          <a
            class="social-icon__link"
            href="https://www.instagram.com/fixpoint.ae/"
          >
            <FaInstagram className="foo-icon" />
          </a>
        </li>
      </ul>
      <ul class="menu">
        <li class="menu__item">
          <a class="menu__link" href="#hero">
            Home
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="#about">
            About
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="#services">
            Services
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="#team">
            Team
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="#footer">
            Contact
          </a>
        </li>
      </ul>
      <p>&copy; 2024 Laptop Service UAE. All rights reserved.</p>
    </footer>
  );
}

export default Foo;
