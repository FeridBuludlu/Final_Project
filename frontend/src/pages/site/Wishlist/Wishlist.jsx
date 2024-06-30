import React, { useContext } from 'react'
import MainContext from '../../../context/context';
import "./Wishlist.css"
import { Helmet } from 'react-helmet'
const Basket = () => {

    const {wishlist,deleteFromWishlist}=useContext(MainContext)
  return (
    <div className="container my-5 table_baskett">
      <Helmet>
        <title>Wishlist</title>
      </Helmet>
    <table className="table my-5">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Delete</th>
          <th scope="col">Add</th>
        </tr>
      </thead>
      <tbody>
        {wishlist && wishlist.map((item, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>
              <img src={item.image} alt="" width="60px" height="60px"/>
            </td>
            <td>{item.title}</td>

            <td>{item.totalPrice}$</td>
            <td>
              <button
                onClick={() => {
                  deleteFromWishlist(item._id);
                }}
                className="btn btn-danger "
              >
                delete
              </button>
            </td>
          </tr>
          
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default Basket