
import React from 'react';
import './Service.css';

const Service = () => {
  const services = [
    {
      videoPoster: 'https://www.expandbuzz.com/wp-content/themes/expandbuzz/assets/videos/Branding.png',
      videoSrc: 'https://www.expandbuzz.com/wp-content/themes/expandbuzz/assets/videos/branding.mp4',
      tags: ['Brand Identity', 'Brand Naming', 'Brand Guidelines'],
      title: 'Branding',
      description: `Developing a brand is not everyone's cup of tea. It is the result of experience gained in years and teamwork that derives the result. As a leading branding agency in India, we provide branding packages that fulfil the fundamental elements of creating a brand. Our branding strategies are unique and personalized according to the nature of your business, resulting in better results within a short period.`,
      learnMoreLink: 'https://www.expandbuzz.com/branding/',
    },
    {
      videoPoster: 'https://www.expandbuzz.com/wp-content/themes/expandbuzz/assets/videos/Packaging.png',
      videoSrc: 'https://www.expandbuzz.com/wp-content/themes/expandbuzz/assets/videos/packaging-design.mp4',
      tags: ['Label Design', 'Food Packaging', 'Mockup'],
      title: 'Packaging',
      description: `Being the primary pillar, one of our core expertise lies in packaging design. Only an effective packaging design can increase your product sales; getting the correct pitch required for each product and building an aesthetic design that matches the nature of the product is all you need. And we are there to help you, with highly skilled designers and project managers, we can deliver the final design required for your product.`,
      learnMoreLink: 'https://www.expandbuzz.com/packaging-design-agency/',
    },
    {
      videoPoster: 'https://www.expandbuzz.com/wp-content/themes/expandbuzz/assets/videos/Packaging.png',
      videoSrc: 'https://www.expandbuzz.com/wp-content/themes/expandbuzz/assets/videos/digital-marketing2.mp4',
      tags: ['Social Media', 'Paid Ads', 'Seo'],
      title: 'Digital Marketing',
      description: `Our expert team in Digital Marketing develops campaigns that can't be ignored. With immense ideas and solutions, our digital enthusiasts associate with brands worldwide to help increase brand awareness, reach, and sales through optimized digital ad campaigns. We strive to enclose and engage users with the brand by identifying the perfect conversation opportunities and the significance of remarketing campaigns.`,
      learnMoreLink: 'https://www.expandbuzz.com/digital-marketing-agency/',
    },
    {
      videoPoster: 'https://www.expandbuzz.com/wp-content/themes/expandbuzz/assets/videos/Website.png',
      videoSrc: 'https://www.expandbuzz.com/wp-content/themes/expandbuzz/assets/videos/web-development.mp4',
      tags: ['UI/UX', 'Landing Pages', 'Shopify', 'CMS'],
      title: 'Website Development',
      description: `The Expand Buzz team will assist in developing ingenious and appealing websites that strengthen your brand. Whatever your website needs are, we'll take our customer-driven designs and integrate them with our in-house tool to deliver the solution you need. Our efficient team ensures that our backend works have fast loading times and are search engine optimized. We believe the more engaging a website is, the better you'll get the result.`,
      learnMoreLink: 'https://www.expandbuzz.com/web-development-agency/',
    },
    {
      videoPoster: 'https://www.expandbuzz.com/wp-content/themes/expandbuzz/assets/videos/Logo.png',
      videoSrc: 'https://www.expandbuzz.com/wp-content/themes/expandbuzz/assets/videos/logo-design.mp4',
      tags: ['Custom', 'Iconic', 'Intigrated', 'Textual'],
      title: 'Logo Design',
      description: `Being the face of your business, the logo design plays a prominent role in the success of your business. It elevates your company to the next level and creates a brand identity in the market. Our creative logo designers have tremendous experience generating logos for numerous brands in all major sectors. So, a dynamic approach to developing an engaging logo design is essential in our current period of fierce competition.`,
      learnMoreLink: 'https://www.expandbuzz.com/logo-design-agency/',
    },
  ];

  return (
    <section className="services-section bg-black pt-lg-0">
      <div className="container-fluid container-fluid-custom mt-lg-5 pt-lg-4">
        <div className="">
          <h2 className="h2 2 mb-0 text-light h2-line text-uppercase">Our</h2>
          <h2 className="h2 mb-0 text-light text-uppercase">Services</h2>
          <h3 className="text-light mb-0 col-md-9 col-lg-5">
            everything you need for a brand under one roof
          </h3>
        </div>
      </div>
      <div className="container-fluid container-fluid-custom">
        {services.map((service, index) => (
          <div className="row pt-5 align-items" key={index}>
            <div className="col-lg-6 px-lg-3">
              <video
                className="big_scr"
                width="100%"
                height="auto"
                poster={service.videoPoster}
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={service.videoSrc} type="video/mp4" />
              </video>
            </div>
            <div className="col-lg-6 px-lg-3">
              <div className="tags-wrapper">
                {service.tags.map((tag, i) => (
                  <a href="#" className="btn1" key={i}>
                    {tag}
                  </a>
                ))}
              </div>
              <div>
                <a
                  href={service.learnMoreLink}
                  className="h2 text-decoration-none text-light pt-4 d-block"
                >
                  {service.title}
                </a>
                <p className="text-light pt-2 text-sm-justify mt-3">
                  {service.description}
                </p>
                <div className="pt-2">
                  <a href={service.learnMoreLink} className="btn2">
                    <img
                      src="/assets/services/right-arrow.png"
                      className=""
                      alt="right-arrow"
                      style={{ width: '35px' }}
                    />
                  </a>
                  <a
                    href={service.learnMoreLink}
                    className="text-light text-decoration-none ps-4 cat-btn"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
