import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer id="contact" class="footer">
      <div class="container">
        <div class="row">
          <div class="footer-col">
            <h4>Mr.Phakkapon Pumpour</h4>
            <ul>
              <li>
                <a
                  href="https://maps.app.goo.gl/DAhL9khudGAXjhKR6"
                  target="https://maps.app.goo.gl/DAhL9khudGAXjhKR6"
                >
                  Address
                </a>
              </li>
              <li>
                <a href="mailto:phakkaponpumpour@gmail.com">Gmail</a>
              </li>
              <li>
                <a href="mailto:phakkaponpumpour@outlook.com">Outlook</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>About Me</h4>
            <ul>
              <li>
                <a
                  href="https://drive.google.com/file/d/1N6LbJL1Tgau4GJeAfn-GHnEMpmB7HewF/view?usp=sharing"
                  target="https://drive.google.com/file/d/1N6LbJL1Tgau4GJeAfn-GHnEMpmB7HewF/view?usp=sharing"
                >
                  CV
                </a>
              </li>
              <li>
                <a
                  href="https://th.jobsdb.com/th/profile/mrphakkapon-pumpour-tbWWN8QNql"
                  target="https://th.jobsdb.com/th/profile/mrphakkapon-pumpour-tbWWN8QNql"
                >
                  Jobsdb
                </a>
              </li>
              <li>
                <a
                  href="https://en.mfu.ac.th/home.html"
                  target="https://en.mfu.ac.th/home.html"
                >
                  Mae Fah Luang University
                </a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>follow me</h4>
            <div class="social-links">
              <a
                href="https://web.facebook.com/little.bear.165033/"
                target="https://web.facebook.com/little.bear.165033/"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/phakkapon_/"
                target="https://www.instagram.com/phakkapon_/"
              >
                <i class="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/phakkapon-pumpour/"
                target="https://www.linkedin.com/in/phakkapon-pumpour/"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/PhakkaponPumpour"
                target="https://github.com/PhakkaponPumpour"
              >
                <i class="fab fa-github"></i>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
