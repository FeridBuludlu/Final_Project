import React from "react";
import "./Section2.css";

const Section2 = () => {
  const cards = [
    {
      src: "http://sneaker.mallthemes.com/wp-content/uploads/2018/10/policy-icon1.png",
      title: "FREE DELIVERY",
      description: "Free shipping on all order",
    },
    {
      src: "http://sneaker.mallthemes.com/wp-content/uploads/2018/10/policy-icon2.png",
      title: "ONLINE SUPPORT 24/7",
      description: "Support online 24 hours a day",
    },
    {
      src: "http://sneaker.mallthemes.com/wp-content/uploads/2018/10/policy-icon3.png",
      title: "MONEY RETURN",
      description: "Back guarantee under 7 days",
    },
    {
      src: "http://sneaker.mallthemes.com/wp-content/uploads/2018/10/policy-icon4.png",
      title: "MEMBER DISCOUNT",
      description: "On every order over $120.00",
    },
    {
      src: "http://sneaker.mallthemes.com/wp-content/uploads/2018/10/policy-icon5.png",
      title: "SECURE PAYMENT",
      description: "All cards accepted",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="Section2 col-12">
          {cards.map((card, index) => (
            <div
              className={`Section2_card ${
                index !== cards.length - 1 ? "border-right" : ""
              }`}
              key={index}
            >
              <img src={card.src} alt={card.title} />
              <div className="Section2_card_text">
                <h4>{card.title}</h4>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;
