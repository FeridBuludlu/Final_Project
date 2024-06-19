import React from "react";
import "./Section6.css"
const Section6 = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 Section6">
          <div className="Section6_view">
            <h4>JOIN OUR</h4>
            <h2>NEWSLETTERS NOW!</h2>
            <form action="">
                <label for="email"></label>
                <input name="email" type="text" placeholder="Your Email Address...." />
                <input type="submit" value="SUBSCRIBE!"></input>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Section6;
