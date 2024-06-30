import React from "react";
import "./Header.css";
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
      <div className="Header_one">
          <div className="container">
            <div className="row">
              <div className="col-4">
                <div className="Logo col-4">
                  <img
                    src="http://sneaker.mallthemes.com/wp-content/uploads/2018/10/logo-1.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="Header_middle">
                  <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="shop">SHOP</Link></li>
                    <li><Link to="blog">BLOG</Link></li>
                    <li><Link to="about">ABOUT</Link></li>
                    <li><Link to="contact">CONTACT</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-4">
                <div className="header_right">
                  <i class="userr fa-regular fa-user">
                    <span>
                      Register or <br /> <p> Sign in</p>
                    </span>
                  </i>
                  <i class="fa-regular fa-heart"></i>
                  <i class="fa-solid fa-basket-shopping"></i>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default Header;
