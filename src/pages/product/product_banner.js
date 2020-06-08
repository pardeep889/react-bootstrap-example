import React from "react";

const ProductBanner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="owl-carousel owl-theme">
          <div className="item">
            <div className="row">
              <div className="col-md-6">
                <div className="banner-left" data-aos="fade-right">
                  <h1>
                    Fundraising
                    <span className="d-block">
                      <b>Products</b>
                    </span>
                  </h1>
                  <p>
                    AIV provides you with pre-built investor-ready templates
                    which you can utilize to build out your data room. No need
                    to spend time creating materials from scratch.
                  </p>
                  <div className="banner-btn">
                    <a href="/">
                      Purchase Now
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="banner-image" data-aos="fade-left">
                  <img src="assets/images/banner-image.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductBanner;
