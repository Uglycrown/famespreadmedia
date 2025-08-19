
import React, { useEffect } from 'react';
import './WeAreEverything.css';

const WeAreEverything = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(
      '.need-section, .agency-section'
    );
    animatedElements.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      observer.observe(el);
    });
  }, []);

  return (
    <>
      <section className="need-section bg-black">
        <div className="container-fluid container-fluid-custom pt-md-2 pt-lg-5">
          <div className="">
            <h2 className="h2 mb-0 text-light h2-line pb-3 pb-md-4 pb-lg-0 col-lg-8">
              We’re Everything <br />
              you need.
            </h2>
          </div>
          <div className="row">
            <div className="col-6 col-md-12 col-lg-4 d-none d-md-block d-lg-block"></div>
            <div className="col-6 col-md-4 col-lg-3">
              <a
                href="https://www.expandbuzz.com/packaging-design-agency/food/"
                className="text-decoration-none text-light d-block links cat-btn"
              >
                #Food
              </a>
              <a
                href="https://www.expandbuzz.com/packaging-design-agency/spices/"
                className="text-decoration-none text-light d-block links cat-btn"
              >
                #Spices
              </a>
              <a
                href="https://www.expandbuzz.com/packaging-design-agency/dairy-products/"
                className="text-decoration-none text-light d-block links cat-btn"
              >
                #Dairy Products
              </a>
              <a
                href="https://www.expandbuzz.com/packaging-design-agency/frozen-food"
                className="text-decoration-none text-light d-block links cat-btn"
              >
                #Frozen Food
              </a>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <a
                href="https://www.expandbuzz.com/packaging-design-agency/fmcg/"
                className="text-decoration-none text-light d-block links cat-btn"
              >
                #FMCG
              </a>
              <a
                href="https://www.expandbuzz.com/packaging-design-agency/cosmetics/"
                className="text-decoration-none text-light d-block links cat-btn"
              >
                #Cosmetics
              </a>
              <a
                href="https://www.expandbuzz.com/packaging-design-agency/beverages/"
                className="text-decoration-none text-light d-block links cat-btn"
              >
                #Beverages
              </a>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <a
                href="https://www.expandbuzz.com/packaging-design-agency/tea/"
                className="text-decoration-none text-light d-block links cat-btn"
              >
                #Tea & Coffee
              </a>
              <a
                href="https://www.expandbuzz.com/packaging-design-agency/dry-fruits/"
                className="text-decoration-none text-light d-block links cat-btn"
              >
                #Dry Fruits
              </a>
              <a
                href="https://www.expandbuzz.com/packaging-design-agency/pharma-nutraceuticals"
                className="text-decoration-none text-light d-block links cat-btn"
              >
                #Pharma
              </a>
            </div>
          </div>
          <div className="mt-4">
            <a
              href="https://www.expandbuzz.com/contact-us/"
              className="text-light cta1"
            >
              Request a proposal for your product
            </a>
            <i className="ri-notification-2-fill bell"></i>
          </div>
        </div>
      </section>

      <section className="agency-section bg-black pt-0" id="agency-section">
        <div className="container-fluid container-fluid-custom mt-lg-5 pt-lg-0">
          <div className="text-center text-sm-justify">
            <h1 className="h4 text-center text-sm-justify text-light col-lg-8 m-auto home-h4">
              INDIA'S LEADING BRANDING & PACKAGING DESIGN AGENCY
            </h1>
            <p className="text-light text-center text-sm-justify col-lg-9 m-auto mt-2">
              With an experience of more than 10 prosperous years in the industry,
              we are privileged to be one of the prominent branding agencies in
              India. We also marked our identity in packaging and digital
              segments, becoming a leading
              <a
                href="https://www.expandbuzz.com/packaging-design-agency"
                className="text-decoration-none"
              >
                packaging design agency
              </a>
              and India's top
              <a
                href="https://www.expandbuzz.com/digital-marketing-agency"
                className="text-decoration-none"
              >
                digital marketing agency
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WeAreEverything;
