import React from "react";

const Home = () => {
  return (
    <div className="cart-wrapper">
      <div className="img-wrapper item">
        <img
          src="https://images.offerup.com/jDNagQiDlSHAspNrgH_ZCDUtW9o=/1918x1850/2be0/2be0c44a18a745bf802b6f7588fa23f9.jpg"
          alt="phone"
        />
      </div>
      <div className="text-wrapper item">
        <span>I-Phone</span>
        <span>Price : $1000</span>
      </div>
      <div className="btn-wrapper item">
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

export default Home;
