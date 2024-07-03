import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import "./Detail.css";
import { Helmet } from "react-helmet";
import MainContext from "../../../context/context";
import axios from "axios";

function Detail() {
  const { id } = useParams();
  const { addToBasket, addToWishlist, wishlist } = useContext(MainContext);
  const [data, setData] = useState();

  useEffect(() => {
    axios.get(`http://localhost:8080/product/${id}`).then((res) => {
      setData(res.data);
    });
  }, [id]);

  return (
    <div className="details">
      <Helmet>
        <title>{data ? data.title : "Detail"}</title>
      </Helmet>
      {data && (
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={data.image} alt={data.title} />
            </div>
            <div className="col-6 text">
              <h3>{data.title}</h3>
              <h3>{data.type}</h3>
              <h4>{data.description}</h4>
              <h3>PRICE : {data.price}$</h3>
              <div className="card-footer">
                <button
                  className="btn btn-warning btn-add-to-cart baskett"
                  onClick={() => addToBasket(data._id)}
                >
                  Add to Basket
                </button>
                <button
                  className="btn btn-outline-secondary btn-add-to-wishlist wish"
                  onClick={() => addToWishlist(data)}
                >
                  {wishlist.some((item) => item._id === data._id) ? (
                    <i className="fa-solid fa-heart"></i>
                  ) : (
                    <i className="fa-regular fa-heart"></i>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
