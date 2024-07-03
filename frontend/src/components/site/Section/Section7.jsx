import React from "react";
import "./Section7.css";

const Section7 = () => {
  return (
    <div className="section7" id="section7">
      <div className="container">
        <div className="row">
          <div className="col-12 about">
            <h2 className="section-title">About Us</h2>
          </div>
          <div className="col-4">
            <div className="about-item">
              <img
                src="http://wp.plazathemes.com/sneaker/wp-content/uploads/2018/10/about-us-banner1-1.jpg"
                alt="About Us Image 1"
                className="about-img"
              />
              <h3 className="about-title">What do we do?</h3>
              <p className="about-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                ac urna magna. Morbi vitae augue eu libero consequat lacinia.
              </p>
            </div>
          </div>
          <div className="col-4">
            <div className="about-item">
              <img
                src="http://wp.plazathemes.com/sneaker/wp-content/uploads/2018/10/about-us-banner2.jpg"
                alt="About Us Image 2"
                className="about-img"
              />
              <h3 className="about-title">Our Mission</h3>
              <p className="about-text">
                Phasellus fringilla suscipit erat, eget placerat eros. Integer
                interdum felis a libero convallis laoreet.
              </p>
            </div>
          </div>
          <div className="col-4">
            <div className="about-item">
              <img
                src="http://wp.plazathemes.com/sneaker/wp-content/uploads/2018/10/about-us-banner3.jpg"
                alt="About Us Image 3"
                className="about-img"
              />
              <h3 className="about-title">History of us</h3>
              <p className="about-text">
                Duis at leo tellus. Nullam commodo felis in mauris maximus
                aliquam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
