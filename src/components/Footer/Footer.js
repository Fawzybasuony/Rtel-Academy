import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="pg-footer">
      <footer className="footer">
        <svg
          className="footer-wave-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path
            className="footer-wave-path"
            d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
          />
        </svg>
        <div className="footer-content">
          <div className="footer-content-column">
            <div className="footer-logo"></div>
            <div className="footer-menu">
              <h2 className="text-xl font-semibold text-red-500">
                {" "}
                Rtel Academy{" "}
              </h2>

              <img
                className="text-2xl mb-5"
                src="https://themazine.com/html/alquran/assets/images/logo.svg"
                style={{ height: 30 }}
                alt="TE Logo"
                loading="lazy"
              />

              <h2 className="footer-menu-name"> Get Started</h2>
              <ul id="menu-get-started" className="footer-menu-list">
                <li className="menu-item menu-item-type-post_type menu-item-object-product">
                  <Link href="#">Start</Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-product">
                  <Link href="#">Documentation</Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-product">
                  <Link href="#">Installation</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-menu">
              <h2 className="footer-menu-name"> Company</h2>
              <ul id="menu-company" className="footer-menu-list">
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <Link href="#">Contact</Link>
                </li>
                <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                  <Link href="#">News</Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <Link href="#">Careers</Link>
                </li>
              </ul>
            </div>
            <div className="footer-menu">
              <h2 className="footer-menu-name"> Legal</h2>
              <ul id="menu-legal" className="footer-menu-list">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                  <Link href="#">Privacy Notice</Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <Link href="#">Terms of Use</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-menu">
              <h2 className="footer-menu-name"> Quick Links</h2>
              <ul id="menu-quick-links" className="footer-menu-list">
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <Link target="_blank" rel="noopener noreferrer" href="#">
                    Support Center
                  </Link>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <Link target="_blank" rel="noopener noreferrer" href="#">
                    Service Status
                  </Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <Link href="#">Security</Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <Link href="#">Blog</Link>
                </li>
                <li className="menu-item menu-item-type-post_type_archive menu-item-object-customer">
                  <Link href="#">Customers</Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <Link href="#">Reviews</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-call-to-action">
              <h2 className="footer-call-to-action-title"> Let's Chat</h2>
              <p className="footer-call-to-action-description">
                {" "}
                Have a support question?
              </p>
              <Link
                className="footer-call-to-action-button button"
                href="#"
                target="_self"
              >
                {" "}
                Get in Touch{" "}
              </Link>
            </div>
            <div className="footer-call-to-action">
              <h2 className="footer-call-to-action-title"> You Call Us</h2>
              <p className="footer-call-to-action-link-wrapper">
                <a
                  className="footer-call-to-action-link"
                  href="tel:+2 01098343366"
                  target="_self"
                >
                  <i className="fa-solid fa-phone"></i> +2 01026130670
                </a>
              </p>

              <p className="footer-call-to-action-link-wrapper">
                <a
                  className="footer-call-to-action-link"
                  href="https://t.me/+201026130670"
                  target="_self"
                >
                  <i className="fa-brands fa-telegram"></i> +2 01026130670
                </a>
              </p>

              <p className="footer-call-to-action-link-wrapper">
                <a
                  className="footer-call-to-action-link"
                  href="tel:+201098343366"
                  target="_self"
                >
                  <i className="fa-regular fa-envelope"></i>{" "}
                  rtelacademy@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="footer-social-links">
            <svg
              className="footer-social-amoeba-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 236 54"
            >
              <path
                className="footer-social-amoeba-path"
                d="M223.06,43.32c-.77-7.2,1.87-28.47-20-32.53C187.78,8,180.41,18,178.32,20.7s-5.63,10.1-4.07,16.7-.13,15.23-4.06,15.91-8.75-2.9-6.89-7S167.41,36,167.15,33a18.93,18.93,0,0,0-2.64-8.53c-3.44-5.5-8-11.19-19.12-11.19a21.64,21.64,0,0,0-18.31,9.18c-2.08,2.7-5.66,9.6-4.07,16.69s.64,14.32-6.11,13.9S108.35,46.5,112,36.54s-1.89-21.24-4-23.94S96.34,0,85.23,0,57.46,8.84,56.49,24.56s6.92,20.79,7,24.59c.07,2.75-6.43,4.16-12.92,2.38s-4-10.75-3.46-12.38c1.85-6.6-2-14-4.08-16.69a21.62,21.62,0,0,0-18.3-9.18C13.62,13.28,9.06,19,5.62,24.47A18.81,18.81,0,0,0,3,33a21.85,21.85,0,0,0,1.58,9.08,16.58,16.58,0,0,1,1.06,5A6.75,6.75,0,0,1,0,54H236C235.47,54,223.83,50.52,223.06,43.32Z"
              />
            </svg>
            <Link
              className="footer-social-link linkedin"
              to="https://wa.me/+201026130670"
              target="_blank"
            >
              <span className="hidden-link-text">Linkedin</span>

              <svg
                className="footer-social-icon-svg w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="currentColor"
              >
                <path d="M16 0C7.164 0 0 7.164 0 16c0 2.837.746 5.522 2.047 7.854L0 32l8.356-2.047A15.95 15.95 0 0 0 16 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm8.139 23.891c-.306.854-1.794 1.57-2.514 1.673-.659.092-1.47.129-2.37-.146-.551-.175-1.257-.404-2.136-.793-3.745-1.62-6.165-5.345-6.347-5.588-.184-.243-1.517-2.017-1.517-3.846 0-1.829.958-2.723 1.294-3.092.336-.368.73-.461.974-.461.243 0 .486 0 .702.013.227.013.547-.088.854.65.306.738 1.039 2.547 1.13 2.734.09.187.153.398.03.641-.122.243-.184.398-.368.61-.184.213-.398.486-.568.651-.184.175-.368.366-.153.73.214.368.948 1.552 2.03 2.51 1.396 1.242 2.548 1.626 2.918 1.797.368.153.585.13.798-.079.243-.258.973-1.128 1.232-1.512.257-.368.514-.306.854-.184.336.122 2.158 1.018 2.518 1.201.367.184.611.276.702.43.09.153.09.885-.215 1.739z" />
              </svg>
            </Link>

            <Link
              className="footer-social-link twitter"
              to="https://x.com/Rtelacademy?t=8SQW3OIqqogRu9scIvzq1A&s=08&mx=2"
              target="_blank"
            >
              <span className="hidden-link-text">Twitter</span>
              <svg
                className="footer-social-icon-svg  w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 26 26"
              >
                <path
                  className="footer-social-icon-path"
                  d="M 25.855469 5.574219 C 24.914063 5.992188 23.902344 6.273438 22.839844 6.402344 C 23.921875 5.75 24.757813 4.722656 25.148438 3.496094 C 24.132813 4.097656 23.007813 4.535156 21.8125 4.769531 C 20.855469 3.75 19.492188 3.113281 17.980469 3.113281 C 15.082031 3.113281 12.730469 5.464844 12.730469 8.363281 C 12.730469 8.773438 12.777344 9.175781 12.867188 9.558594 C 8.503906 9.339844 4.636719 7.246094 2.046875 4.070313 C 1.59375 4.847656 1.335938 5.75 1.335938 6.714844 C 1.335938 8.535156 2.261719 10.140625 3.671875 11.082031 C 2.808594 11.054688 2 10.820313 1.292969 10.425781 C 1.292969 10.449219 1.292969 10.46875 1.292969 10.492188 C 1.292969 13.035156 3.101563 15.15625 5.503906 15.640625 C 5.0625 15.761719 4.601563 15.824219 4.121094 15.824219 C 3.78125 15.824219 3.453125 15.792969 3.132813 15.730469 C 3.800781 17.8125 5.738281 19.335938 8.035156 19.375 C 6.242188 20.785156 3.976563 21.621094 1.515625 21.621094 C 1.089844 21.621094 0.675781 21.597656 0.265625 21.550781 C 2.585938 23.039063 5.347656 23.90625 8.3125 23.90625 C 17.96875 23.90625 23.25 15.90625 23.25 8.972656 C 23.25 8.742188 23.246094 8.515625 23.234375 8.289063 C 24.261719 7.554688 25.152344 6.628906 25.855469 5.574219 "
                />
              </svg>
            </Link>

            <Link className="footer-social-link youtube" to="#" target="_blank">
              <span className="hidden-link-text">Youtube</span>
              <svg
                className="footer-social-icon-svg  w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
              >
                <path
                  className="footer-social-icon-path"
                  d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"
                />
              </svg>
            </Link>

            <a
              className="footer-social-link github"
              href="https://www.instagram.com/rtelacademy?igsh=MTZnNGFhMm5uOHo5Yw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="hidden-link-text">Instagram</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="footer-social-icon-svg w-6"
                viewBox="0 0 32 32"
                fill="currentColor"
              >
                <path d="M16 2.879c4.205 0 4.717.015 6.367.092 1.552.071 2.608.336 3.593.72a7.216 7.216 0 0 1 2.605 1.698 7.216 7.216 0 0 1 1.698 2.605c.384.985.649 2.041.72 3.593.077 1.65.092 2.162.092 6.367s-.015 4.717-.092 6.367c-.071 1.552-.336 2.608-.72 3.593a7.216 7.216 0 0 1-1.698 2.605 7.216 7.216 0 0 1-2.605 1.698c-.985.384-2.041.649-3.593.72-1.65.077-2.162.092-6.367.092s-4.717-.015-6.367-.092c-1.552-.071-2.608-.336-3.593-.72a7.216 7.216 0 0 1-2.605-1.698 7.216 7.216 0 0 1-1.698-2.605c-.384-.985-.649-2.041-.72-3.593-.077-1.65-.092-2.162-.092-6.367s.015-4.717.092-6.367c.071-1.552.336-2.608.72-3.593a7.216 7.216 0 0 1 1.698-2.605 7.216 7.216 0 0 1 2.605-1.698c.985-.384 2.041-.649 3.593-.72 1.65-.077 2.162-.092 6.367-.092zm0-2.879C11.713 0 11.17.015 9.485.092 7.784.169 6.488.42 5.357.855a9.21 9.21 0 0 0-3.326 2.165A9.21 9.21 0 0 0 .855 6.357c-.435 1.131-.686 2.427-.763 4.128C0 11.17 0 11.713 0 16s.015 4.83.092 6.515c.077 1.701.328 2.997.763 4.128a9.21 9.21 0 0 0 2.165 3.326 9.21 9.21 0 0 0 3.326 2.165c1.131.435 2.427.686 4.128.763C11.17 32 11.713 32 16 32s4.83-.015 6.515-.092c1.701-.077 2.997-.328 4.128-.763a9.21 9.21 0 0 0 3.326-2.165 9.21 9.21 0 0 0 2.165-3.326c.435-1.131.686-2.427.763-4.128.077-1.685.092-2.228.092-6.515s-.015-4.83-.092-6.515c-.077-1.701-.328-2.997-.763-4.128a9.21 9.21 0 0 0-2.165-3.326A9.21 9.21 0 0 0 26.643.855c-1.131-.435-2.427-.686-4.128-.763C20.83 0 20.287 0 16 0z" />
                <path d="M16 7.787A8.213 8.213 0 1 0 16 24.426a8.213 8.213 0 0 0 0-16.639zm0 13.533a5.32 5.32 0 1 1 0-10.639 5.32 5.32 0 0 1 0 10.639zM24.625 4.844a1.922 1.922 0 1 0 0 3.844 1.922 1.922 0 0 0 0-3.844z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="footer-copyright-wrapper">
            <p className="footer-copyright-text">
              <Link className="footer-copyright-link" href="#" target="_self">
                {" "}
                ©2024. | Designed By: Fawzy Basuony. | All rights reserved.{" "}
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
