// Order.js
import React from "react";
import Footer from "../../components/Footer";

const Order = ({ cart }) => (
  <div>
    <h2 className="text-center text-7xl font-bold">Order page</h2>
    <ul>
      {/* {cart.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))} */}
    </ul>
    <Footer />
  </div>
);

export default Order;
