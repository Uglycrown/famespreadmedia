
import React, { useEffect } from 'react';
import Swiper from 'swiper';
import { gsap } from 'gsap';
import 'swiper/swiper-bundle.css';
import './Hero.css';

const Hero = () => {
  useEffect(() => {
    let galleryThumbs;

    if (window.innerWidth > 767) {
      galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 'auto',
        centeredSlides: false,
        loop: false,
        freeMode: true,
        watchSlidesProgress: true,
      });
    }

    const gallerySlider = new Swiper('.gallery-slider', {
      loop: true,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      thumbs: galleryThumbs ? { swiper: galleryThumbs } : {},
    });

    function animateText(activeSlide) {
      if (!activeSlide) return;

      gsap.fromTo(
        activeSlide.querySelector('.heading-wrapper'),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.1 }
      );

      gsap.fromTo(
        activeSlide.querySelector('.text-wrapper'),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.3 }
      );
    }

    animateText(document.querySelector('.swiper-slide-active'));

    gallerySlider.on('slideChangeTransitionStart', function () {
      const activeSlide = document.querySelector('.gallery-slider .swiper-slide-active');
      animateText(activeSlide);
    });
  }, []);

  return (
    <main id="main" className="home-page">
      <section className="home-banner-section py-0">
        <div className="gallery">
          <div className="swiper gallery-slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide my-slide">
                <div className="home-banner-box">
                  <div className="home-banner-content">
                    <h2 className="h2 heading-wrapper1 heading-wrapper">
                      Unwrap the Art of Packaging
                    </h2>
                    <p className="text-gray text-wrapper1 text-wrapper">
                      Effective packaging that speaks volumes, designed with creative inserts to enhance your product sales. Your Product's Perfect Dress
                    </p>
                  </div>
                  <div className="home-banner-img">
                    <img
                      src="https://www.expandbuzz.com/wp-content/themes/expandbuzz/assets/img/packaging-design.webp"
                      className="img-fluid"
                      alt="packaging-design"
                    />
                  </div>
                </div>
              </div>
              <div className="swiper-slide my-slide">
                <div className="home-banner-box">
                  <div className="home-banner-content">
                    <h2 className="h2 heading-wrapper">
                      Unleashing the Power of Your Brand
                    </h2>
                    <p className="text-gray text-wrapper">
                      Build your Dreams Through Branding - Where Your Story Evolves into an Enduring Legacy.
                    </p>
                  </div>
                  <div className="home-banner-img">
                    <img
                      src="https://www.expandbuzz.com/wp-content/themes/expandbuzz/assets/img/brand-identity-design.webp"
                      className="img-fluid"
                      alt="brand-identity-design"
                    />
                  </div>
                </div>
              </div>
              <div className="swiper-slide my-slide">
                <div className="home-banner-box">
                  <div className="home-banner-content">
                    <h2 className="h2 heading-wrapper">
                      Unveil Your Brand's Essence
                    </h2>
                    <p className="text-gray text-wrapper">
                      We design unique brand emblems, helping businesses find their special identity in the world of marketing and branding
                    </p>
                  </div>
                  <div className="home-banner-img">
                    <img
                      src="https://www.expandbuzz.com/wp-content/themes/expandbuzz/assets/img/logo-design.webp"
                      className="img-fluid"
                      alt="logo-design"
                    />
                  </div>
                </div>
              </div>
              <div className="swiper-slide my-slide">
                <div className="home-banner-box">
                  <div className="home-banner-content">
                    <h2 className="h2 heading-wrapper">
                      Elevate Your Digital Presence
                    </h2>
                    <p className="text-gray text-wrapper">
                      We deliver holistic digital marketing solutions, guiding them through the constantly evolving realm of competitive digital landscapes
                    </p>
                  </div>
                  <div className="home-banner-img">
                    <img
                      src="https://www.expandbuzz.com/wp-content/themes/expandbuzz/assets/img/social-media-creative-design.webp"
                      className="img-fluid"
                      alt="social-media-creative-design"
                    />
                  </div>
                </div>
              </div>
              <div className="swiper-slide my-slide">
                <div className="home-banner-box">
                  <div className="home-banner-content">
                    <h2 className="h2 heading-wrapper">
                      Crafting Your Online Identity Today
                    </h2>
                    <p className="text-gray text-wrapper">
                      Shaping Future Digital Landscapes Today - Your Imagination, Our expertise, and Limitless Potential Waiting to Be Unveiled.
                    </p>
                  </div>
                  <div className="home-banner-img">
                    <img
                      src="https://www.expandbuzz.com/wp-content/themes/expandbuzz/assets/img/website-design.webp"
                      className="img-fluid"
                      alt="website-design"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>

          <div className="swiper gallery-thumbs">
            <div className="swiper-wrapper">
              <div className="swiper-slide thumb_img">
                <div className="sldbtn">
                  <p className="sldbtn_link">Packaging Design</p>
                </div>
                <span className="before-line2"></span>
              </div>
              <div className="swiper-slide thumb_img">
                <div className="sldbtn">
                  <p className="sldbtn_link">Brand Design</p>
                </div>
                <span className="before-line2"></span>
              </div>
              <div className="swiper-slide thumb_img">
                <div className="sldbtn">
                  <p className="sldbtn_link">Logo Design</p>
                </div>
                <span className="before-line2"></span>
              </div>
              <div className="swiper-slide thumb_img">
                <div className="sldbtn">
                  <p className="sldbtn_link">Social Media</p>
                </div>
                <span className="before-line2"></span>
              </div>
              <div className="swiper-slide thumb_img">
                <div className="sldbtn">
                  <p className="sldbtn_link">Website</p>
                </div>
                <span className="before-line2"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
