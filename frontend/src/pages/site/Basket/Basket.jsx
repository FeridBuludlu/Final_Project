import React, { useContext } from "react";
import MainContext from "../../../context/context";
import "./Basket.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
const Basket = () => {
  const { addToBasket, deleteFromBasket, basket } = useContext(MainContext);
  return (
    <div className="container my-5 table_baskett">
      <Helmet>
        <title>Basket</title>
      </Helmet>
      <table className="table my-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Count</th>
            <th scope="col">Price</th>
            <th scope="col">Delete</th>
            <th scope="col">Add</th>
          </tr>
        </thead>
        <tbody>
          {basket &&
            basket.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  <Link to={`/detail/${item._id}`}>
                    {" "}
                    <img src={item.image} alt="" width="60px" height="60px" />
                  </Link>
                </td>
                <td>{item.title}</td>
                <td>{item.count}</td>

                <td>{item.totalPrice}$</td>
                <td>
                  <button
                    onClick={() => {
                      deleteFromBasket(item._id);
                    }}
                    className="btn btn-danger delete "
                  >
                    -
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      addToBasket(item._id);
                    }}
                    className="btn btn-warning add "
                  >
                    +
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Basket;
