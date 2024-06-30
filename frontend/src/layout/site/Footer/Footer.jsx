import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="Footer_main">
        <div className="Footer_div1">
          <img
            src="http://wp.plazathemes.com/sneaker/wp-content/uploads/2018/10/logo-2-retina.png"
            alt=""
          />
          <div className="Footer_div1_number">
            <img
              src="http://wp.plazathemes.com/sneaker/wp-content/uploads/2018/10/footer-icon.png"
              alt=""
            />
            <h2>(+994) 50 462 00 28</h2>
          </div>
          <p>View on map</p>
          <div className="footer_icon">
            <ul>
              <li className="facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </li>
              <li className="twitter">
                <i className="fa-brands fa-twitter"></i>
              </li>
              <li className="instagram">
                <i className="fa-brands fa-instagram"></i>
              </li>
              <li className="linkedin">
                <i className="fa-brands fa-linkedin-in"></i>
              </li>
              <li className="youtube">
                <i className="fa-brands fa-youtube"></i>
              </li>
            </ul>
          </div>
        </div>
        <div className="Footer_div2">
          <ul>
            <li>
              <b>INFORMATION</b>
            </li>
            <li>About Us</li>
            <li>Delivery Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Customer Service</li>
            <li>Return Policy</li>
          </ul>
        </div>
        <div className="Footer_div3">
          <ul>
            <li>
              <b>MY ACCOUNT</b>
            </li>
            <li>My Account</li>
            <li>Wishlist</li>
            <li>Newsletter</li>
            <li>Order History</li>
            <li>International Orders</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="Footer_div4">
          <ul>
            <li><b>LATEST POSTS</b></li>
            <li>
              <div className="Footer_div4_first">
                <img
                  src="http://wp.plazathemes.com/sneaker/wp-content/uploads/2018/04/blog1-800x420.jpg"
                  alt=""
                />
                <div className="Footer_div4_first_text">
                  <h4>BLOG IMAGE <br /> POST (STICKY)</h4>
                  <p>October 11, 2018</p>
                </div>
              </div>
            </li>
            <li>
              <div className="Footer_div4_second">
                <img
                  src="http://wp.plazathemes.com/sneaker/wp-content/uploads/2018/04/blog2-800x420.jpg"
                  alt=""
                />
                <div className="Footer_div4_second_text">
                  <h4>POST WITH <br /> GALLERY</h4>
                  <p>October 11, 2018</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="Footer_div5">
          <div className="Footer_div5_first">
            <ul>
              <li><b>GET İN TOUCH</b></li>
              <li>Address: 123 Main Street, Anytown, CA 12345 – USA.</li>
              <li>Telephone Enquiry: (012) 800 456 789-987</li>
              <li>Email: Contact@plazathemes.com</li>
            </ul>
          </div>
          <div className="Footer_div5_second">
            <ul>
              <li><b>OPENİNG TİME</b></li>
              <li>Open: 8:00 AM – Close: 18:00 PM</li>
              <li>Saturday – Sunday: Close</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="Footer_main_second">
        <p>Copyright © 2018 PlazaThemes. All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;

