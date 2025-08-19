
import React from 'react';
import './Convert.css';

const Convert = () => {
  const images = [
    'Atta_flour_packaging_design.webp',
    'Chocolate_packaging_design.webp',
    'Cosmetics_packaging_design.webp',
    'Creative_Saffron_box_packaging_design.webp',
    'Dishwash_Box_packaging_design.webp',
    'Dry_fruits_packaging_design.webp',
    'Dry_fruits_Pouch_packaging_design.webp',
    'Dry_fruits_Tin_packaging_design.webp',
    'Edible_Oil_packaging_design.webp',
    'Frozen_food_packaging_design.webp',
    'Ghee_packaging_design.webp',
    'Honey_Jar_label_design.webp',
    'Ice_cream_tub_packaging_design.webp',
    'Juice_Bottle_label_design.webp',
    'Kids_breakfast_packaging_design.webp',
  ];

  return (
    <>
      <section className="idea-section bg-black pb-1 pt-0 pt-md-5 pt-lg-5">
        <div className="container-fluid container-fluid-custom position-relative">
          <div className="banner1">
            <div className="text-center">
              <h3 className="h3 text-light text-center mb-0">
                Are you looking to convert
              </h3>
              <h2 className="h2 text-light pt-2 mb-0 text-uppercase text-center">
                Ideas Into
              </h2>
              <h2 className="h2 text-light text-uppercase text-center">
                Opportunities?
              </h2>
              <h4 className="h4 text-light pt-lg-4 text-center">
                We build an immersive brand!
              </h4>
              <p className="text-gray text-center text-sm-justify para pt-4 text-center">
                The best business relationships start with a simple discussion.
                You might be wondering how we know. With more than 10 years of
                proven experience, we got opportunities to interact with a wide
                range of potential clients worldwide.
              </p>
              <p className="text-gray text-center text-sm-justify para pt-4">
                As a creative branding agency, we consider every instant of
                essential change conceals immense opportunity. That's what makes
                us come up with a powerful medium that drives the future. From
                idea to execution, we provide aesthetic branding experience and
                packaging solutions that enhance your brand and make it scale
                faster and more robust.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="img-section bg-black desk_section pb-0">
        <div className="container-fluid px-lg-0 container-fluid-custom2">
          <div className="row anime-row">
            {images.map((image, index) => (
              <div className="col-12 col-lg-4 px-1 pt-0 pb-2" key={index}>
                <div className="img-hover-box">
                  <img
                    className="img-fluid w-100 img-hover"
                    src={`/assets/clients/${image}`}
                    alt={image.split('.')[0]}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Convert;
