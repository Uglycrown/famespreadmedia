
import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const closeNav = (event) => {
      if (isOpen) {
        const nav = document.getElementById('mb_nav');
        const navToggle = document.getElementById('nav');
        if (nav && navToggle && !nav.contains(event.target) && !navToggle.contains(event.target)) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener('click', closeNav);

    return () => {
      document.removeEventListener('click', closeNav);
    };
  }, [isOpen]);

  return (
    <>
      <div className="nav_toggle_wrapper">
        <a href="#home">
          <img src="/assets/logo.png" className="mini-logo" alt="logo" />
        </a>

        <div className="d-block d-md-none mob_number_box">
          <a className="text-decoration-none text-white" href="tel:+91 9871521144">
            <i className="ri-phone-fill"></i> +91 9871521144
          </a>
        </div>

        <div type="button" name="btn_nav" className="nav_toggle" id="nav" onClick={toggleMenu}>
          <div className="open-close-btn">
            <div id="nav-icon2" className={isOpen ? 'open' : ''}>
              <span className="toggle1"></span>
              <span className="toggle2 second"></span>
              <span></span>
              <span></span>
              <span className="toggle5"></span>
              <span className="toggle2 second"></span>
            </div>
          </div>
        </div>

        <div className="h-social-icon d-none d-md-block">
          <a
            href="https://www.facebook.com/expandbuzzofficial"
            className="text-decoration-none"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-facebook-fill fill-anime"></i>
          </a>
          <a
            href="https://twitter.com/Expand_buzz"
            className="text-decoration-none"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-twitter-x-fill fill-anime"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/expandbuzz"
            className="text-decoration-none"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-linkedin-fill fill-anime"></i>
          </a>
          <a
            href="https://www.instagram.com/expandbuzz"
            className="text-decoration-none"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-instagram-line fill-anime"></i>
          </a>
        </div>
      </div>

      <nav id="mb_nav" className={`nav ${isOpen ? 'active' : ''}`}>
        <div className="container ps-lg-5">
          <li className="logo">
            <a className="nav__link" href="#home" onClick={() => setIsOpen(false)}>
              <img
                src="https://via.placeholder.com/250x80/009fe3/ffffff?text=EXPAND+BUZZ"
                className="img-fluid"
                alt="logo"
                style={{ width: '250px' }}
              />
            </a>
          </li>
          <div className="row">
            <div className="col-lg-4">
              <ul>
                <li><a className="nav__link" href="#about" onClick={() => setIsOpen(false)}>About Us</a></li>
                <li><a className="nav__link" href="#work" onClick={() => setIsOpen(false)}>Our Work</a></li>
                <li><a className="nav__link" href="#case-study" onClick={() => setIsOpen(false)}>Case Study</a></li>
                <li><a className="nav__link" href="#branding" onClick={() => setIsOpen(false)}>Branding</a></li>
                <li>
                  <a className="nav__link" href="#packaging" onClick={() => setIsOpen(false)}>Packaging Design</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <ul>
                <li><a className="nav__link" href="#logo" onClick={() => setIsOpen(false)}>Logo Design</a></li>
                <li><a className="nav__link" href="#web" onClick={() => setIsOpen(false)}>Web Development</a></li>
                <li>
                  <a className="nav__link" href="#marketing" onClick={() => setIsOpen(false)}>Digital Marketing</a>
                </li>
                <li><a className="nav__link" href="#contact" onClick={() => setIsOpen(false)}>Contact Us</a></li>
                <li><a className="nav__link" href="#blog" onClick={() => setIsOpen(false)}>Blog</a></li>
              </ul>
            </div>
            <div className="col-lg-4">
              <ul>
                <li>
                  <div className="nav__link nav_link_text">
                    <h3 className="d-none d-md-none d-lg-block">
                      Want a<br />best selling brand?
                    </h3>
                    <p className="d-none d-md-none d-lg-block">
                      Tell us about your project Fancy a coffee and a chat? We
                      would love to meet you. Drop us a line or slide into our DMs
                      and we will help to create buzz in your social handles
                    </p>
                    <p>
                      <a
                        href="mailto:hi@expandbuzz.com"
                        className="nav__link call-link2 text-lowercase"
                        style={{ fontSize: '16px' }}
                      >
                        hi@expandbuzz.com
                      </a>
                    </p>
                    <div>
                      <a href="tel:9871521144" className="text-white call-link anime">
                        +91 9871521144
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://via.placeholder.com/200x200/009fe3/ffffff?text=BG"
            className="img-fluid bg-elm1"
            alt="bg-elm1"
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
