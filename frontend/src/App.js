import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContext from "./context/context";
import ROUTES from "./Routes/routes";
import AOS from "aos";
import axios from "axios";
import {jwtDecode} from "jwt-decode";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const router = createBrowserRouter(ROUTES);
  const [user, setUser] = useState(localStorage.getItem("username") || null);
  const [userT, setUserT] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [userId, setUserId] = useState(localStorage.getItem("userId") || null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (token) {
      try {
        const decodeToken = jwtDecode(token);
        setUserT(decodeToken);
      } catch (error) {
        console.error("Invalid token", error.message);
        setUserT(null);
      }
    }
  }, [token]);

  const [heart, setHeart] = useState(
    localStorage.getItem("heart") ? JSON.parse(localStorage.getItem("heart")) : []
  );

  const [wishlist, setWishlist] = useState(
    localStorage.getItem("wishlist") ? JSON.parse(localStorage.getItem("wishlist")) : []
  );

  const [basket, setBasket] = useState(
    localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : []
  );

  useEffect(() => {
    axios
      .get("http://localhost:8080/product")
      .then((res) => setData([...res.data]));
  }, []);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem("heart", JSON.stringify(heart));
  }, [heart]);

  function deleteFromBasket(id) {
    let target = basket.find((x) => x._id === id);
    if (target.count > 1) {
      target.count -= 1;
      target.totalPrice -= target.price;
      setBasket([...basket]);
    } else {
      setBasket(basket.filter((x) => x._id !== id));
    }
  }

  function addToBasket(id) {
    let basketItem = basket.find((x) => x._id === id);
    if (!basketItem) {
      let target = data.find((x) => x._id === id);
      let newItem = {
        ...target,
        count: 1,
        totalPrice: target.price,
      };
      setBasket([...basket, newItem]);
    } else {
      basketItem.count += 1;
      basketItem.totalPrice += basketItem.price;
      setBasket([...basket]);
    }
  }

  function addToWishlist(item) {
    const isItemInWishlist = wishlist.find((x) => x._id === item._id);
    if (isItemInWishlist) {
      setWishlist(wishlist.filter((x) => x._id !== item._id));
    } else {
      setWishlist([...wishlist, item]);
    }

    const isItemInHeartList = heart.includes(item._id);
    if (isItemInHeartList) {
      setHeart(heart.filter((id) => id !== item._id));
    } else {
      setHeart([...heart, item._id]);
    }
  }

  function deleteFromWishlist(id) {
    setWishlist(wishlist.filter((x) => x._id !== id));
  }

  const contextData = {
    data,
    setData,
    addToBasket,
    deleteFromBasket,
    basket,
    setBasket,
    wishlist,
    setWishlist,
    addToWishlist,
    deleteFromWishlist,
    heart,
    setHeart,
    user,
    setUser,
    token,
    setToken,
    userId,
    setUserId,
    userT,
    setUserT,
  };

  return (
    <MainContext.Provider value={contextData}>
      <RouterProvider router={router} />
    </MainContext.Provider>
  );
}

export default App;