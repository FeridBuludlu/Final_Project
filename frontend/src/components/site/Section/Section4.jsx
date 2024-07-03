import React, { useContext, useState } from "react";
import "./Section4.css";
import MainContext from "../../../context/context";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Section4 = () => {
  const { data, addToBasket, addToWishlist, wishlist } =
    useContext(MainContext);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState(null);

  const handleAddToBasket = (productId) => {
    addToBasket(productId);
    toast.success("Successfully added to basket!");
  };

  const handleAddToWishlist = (product) => {
    addToWishlist(product);
    toast.success("Successfully added to wishlist!");
  };

  return (
    <div className="section4" id="section4">
      <ToastContainer position="bottom-right" autoClose={3000} />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="shop-title">Shop</h2>
          </div>
          <div className="buttons">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="dropdown">
              <button className="dropbtn">Sort</button>
              <div className="dropdown-content">
                <button
                  onClick={() => setSortBy({ field: "title", asc: true })}
                >
                  A-Z
                </button>
                <button
                  onClick={() => setSortBy({ field: "title", asc: false })}
                >
                  Z-A
                </button>
                <button
                  onClick={() => setSortBy({ field: "price", asc: true })}
                >
                  Ascending Price
                </button>
                <button
                  onClick={() => setSortBy({ field: "price", asc: false })}
                >
                  Descending Price
                </button>
                <button onClick={() => setSortBy(null)}>Default</button>
              </div>
            </div>
          </div>
          {data &&
            data
              .filter(
                (x) =>
                  x.title &&
                  x.title.toLowerCase().includes(search.toLowerCase())
              )
              .sort((a, b) => {
                if (!sortBy) return 0;
                if (sortBy.asc) {
                  return a[sortBy.field] > b[sortBy.field] ? 1 : -1;
                } else {
                  return a[sortBy.field] < b[sortBy.field] ? 1 : -1;
                }
              })
              .map((item, index) => (
                <div className="col-md-3" key={index}>
                  <div className="cards" id="">
                    <Link to={`/detail/${item._id}`}>
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
                        onClick={() => handleAddToBasket(item._id)}
                      >
                        Add to Basket
                      </button>
                      <button
                        className="wish"
                        onClick={() => handleAddToWishlist(item)}
                      >
                        <i className="fa-regular fa-heart"></i>
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
