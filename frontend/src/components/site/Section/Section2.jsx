import React from "react";
import "./Section2.css";

const Section2 = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="Section2 col-12">
          <div className="Section2_card border-right">
            <img src="http://sneaker.mallthemes.com/wp-content/uploads/2018/10/policy-icon1.png" alt="FREE DELIVERY" />
            <div className="Section2_card_text">
              <h4>FREE DELIVERY</h4>
              <p>Free shipping on all order</p>
            </div>
          </div>
          <div className="Section2_card border-right">
            <img src="http://sneaker.mallthemes.com/wp-content/uploads/2018/10/policy-icon2.png" alt="ONLINE SUPPORT 24/7" />
            <div className="Section2_card_text">
              <h4>ONLINE SUPPORT 24/7</h4>
              <p>Support online 24 hours a day</p>
            </div>
          </div>
          <div className="Section2_card border-right">
            <img src="http://sneaker.mallthemes.com/wp-content/uploads/2018/10/policy-icon3.png" alt="MONEY RETURN" />
            <div className="Section2_card_text">
              <h4>MONEY RETURN</h4>
              <p>Back guarantee under 7 days</p>
            </div>
          </div>
          <div className="Section2_card border-right">
            <img src="http://sneaker.mallthemes.com/wp-content/uploads/2018/10/policy-icon4.png" alt="MEMBER DISCOUNT" />
            <div className="Section2_card_text">
              <h4>MEMBER DISCOUNT</h4>
              <p>On every order over $120.00</p>
            </div>
          </div>
          <div className="Section2_card">
            <img src="http://sneaker.mallthemes.com/wp-content/uploads/2018/10/policy-icon5.png" alt="SECURE PAYMENT" />
            <div className="Section2_card_text">
              <h4>SECURE PAYMENT</h4>
              <p>All cards accepted</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
