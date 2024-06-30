import React, { useContext, useState } from "react";
import "./Section7.css";
import MainContext from "../../../context/context";
import { Link } from "react-router-dom";
const Section7 = () => {
  const {
    data,
    addToBasket,
    addToWishlist,
    deleteFromWishlist,
    heart,
    wishlist,
  } = useContext(MainContext);
  return (
    <div className="section7">
      <div className="container">
        <div className="row">
          <div className="col-10">
            <div className="row">
              {data.map((item, index) => (
                <div className="col-md-3" key={index}>
                  <div className="cards">
                    <Link to={`/detail/${item._id}`}>
                      {" "}
                      <img
                        src={item.image}
                        className="card-img-top"
                        alt="Card Image"
                      />
                    </Link>
                    <div className="card-body">
                      <p className="card-text">{item.type}</p>
                      <hr />
                      <h2>{item.title}</h2>
                      <p>{item.price}$</p>
                    </div>
                    <div className="card-footer bg-transparent">
                      <button
                        className="btn btn-warning btn-add-to-cart baskett"
                        onClick={() => addToBasket(item._id)}
                      >
                        Add to Basket
                      </button>
                      <button
                        className="wish"
                        onClick={() => addToWishlist(item)}
                      >
                        {!wishlist.some((x) => x.id === data.id) ? (
                          <i class="fa-regular fa-heart"></i>
                        ) : (
                          <i class="fa-solid fa-heart"></i>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-2 image">
            <img
              src="http://wp.plazathemes.com/sneaker/wp-content/uploads/2018/10/home1-product-sidebar1.jpg"
              alt="Sidebar Image"
            />
            <img
              src="http://wp.plazathemes.com/sneaker/wp-content/uploads/2018/11/home1-product-sidebar2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
