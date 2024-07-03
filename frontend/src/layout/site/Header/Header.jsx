import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainContext from "../../../context/context";
import "./Header.css";

const Header = () => {
  const { user, setUser, setToken, setUserId } = useContext(MainContext); // Ensure setUserId is correctly used
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    setUser(null);
    setToken(null);
    setUserId(null);
    navigate("/login");
  };

  return (
    <div className="Header_one">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="Logo col-4">
              <Link to="/">
                <img
                  src="http://sneaker.mallthemes.com/wp-content/uploads/2018/10/logo-1.png"
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="col-4"></div>
          <div className="col-4">
            <div className="header_right">
              {user ? (
                <>
                  <span>{user.email}</span>
                  <button onClick={handleLogout} className="logout-button">
                    <i class="fa-solid fa-arrow-right-from-bracket"></i>LOGOUT
                  </button>
                </>
              ) : (
                <i className="userr fa-regular fa-user">
                  <span>
                    <Link to="/register">Register</Link> or <br />
                    <p>
                      <Link to="/login">Sign in</Link>
                    </p>
                  </span>
                </i>
              )}
              <Link to="/wishlist">
                <i className="fa-regular fa-heart"></i>
              </Link>
              <Link to="/basket">
                <i className="fa-solid fa-basket-shopping"></i>
              </Link>
              <Link to="/contact">
                <i class="fa-regular fa-message"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
