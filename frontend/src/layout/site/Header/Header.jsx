import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <>
      <div className="Header_one">
        <nav class="navbar">
          <div className="Logo col-4">
            <img
              src="http://sneaker.mallthemes.com/wp-content/uploads/2018/10/logo-1.png"
              alt=""
            />
          </div>
          <div className="header_right">
            <i class="userr fa-regular fa-user">
              <span>
                Register or <br /> <p> Sign in</p>
              </span>
            </i>
            <i class="fa-regular fa-heart"></i>
            <i class="fa-solid fa-basket-shopping"></i>
          </div>
        </nav>
      </div>
      <div className="Header_two">
        <div className="Header_left_two">
          <ul>
            <li>HOME</li>
            <li>SHOP</li>
            <li>BLOG</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div className="Header_right_two">
          <p>Follow us: </p>
          <div className="iconn">
            <ul>
              <li>
                <i class="fa-brands fa-facebook-f"></i>
              </li>
              <li>
                <i class="fa-brands fa-twitter"></i>
              </li>
              <li>
                <i class="fa-brands fa-instagram"></i>
              </li>
              <li>
                <i class="fa-brands fa-linkedin-in"></i>
              </li>
              <li>
                <i class="fa-brands fa-youtube"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
