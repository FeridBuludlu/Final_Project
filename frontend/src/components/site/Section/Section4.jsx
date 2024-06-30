import React, { useContext, useState } from "react";
import "./Section4.css";
import MainContext from "../../../context/context";
import { Link } from "react-router-dom";
const Section4 = () => {
  const {
    data,
    addToBasket,
    addToWishlist,
    wishlist,
  } = useContext(MainContext);

  return (
    <div className="section4">
      <div className="container">
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
                    // style={{ color: wishlist.includes(item._id) ? 'red' : 'white' }}
                  >
                    {!wishlist.some((x) => x.id === data.id) ? (
                      <i class="fa-regular fa-heart"></i>
                    ) : (
                      <i class="fa-solid fa-heart"></i>
                    )}

                    {/* {heart.includes(item.id) ? <i class="fa-solid fa-heart"></i> : <i class="fa-regular fa-heart"></i>} */}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section4;
