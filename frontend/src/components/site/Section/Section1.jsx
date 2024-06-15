import React, { useEffect } from "react";
import "./Section1.css"; // Import your CSS file if it contains additional styles

function Section1() {
  useEffect(() => {
    const interval = setInterval(() => {
      const nextButton = document.querySelector(".carousel-control-next");
      if (nextButton) {
        nextButton.click();
      }
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="carousel-image image1">
              <div className="image1_text">
                <h4>TOP JACKET OF SNEAKER</h4>
                <h2>NEW JACKETS</h2>
                <h4>Aurora Shell Jacket is Ready For Any Adventure</h4>
                <button>Shopping Now</button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-image image2">
              <div className="image2_text">
                <h4>TOP JACKET OF SNEAKER</h4>
                <h2>NEW JACKETS</h2>
                <h4>Aurora Shell Jacket is Ready For Any Adventure</h4>
                <button>Shopping Now</button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-image image3">
              <div className="image3_text">
                <h4>TOP JACKET OF SNEAKER</h4>
                <h2>NEW JACKETS</h2>
                <h4>Aurora Shell Jacket is Ready For Any Adventure</h4>
                <button>Shopping Now</button>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Section1;
