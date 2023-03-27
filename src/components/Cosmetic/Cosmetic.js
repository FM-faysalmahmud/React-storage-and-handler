import React from "react";
import { addToDb, removeFromDb } from "../../utilities/fakedb";
import "./Cosmetic.css";

const Cosmetic = (props) => {
  const { name, price, id } = props.cosmetic;
  const addToCart = (id) => {
    addToDb(id);
    /*     console.log("item click", id); */
  };
  /*   const addToCartParamerter = () => addToCart(id); */

  const removeFromCart = (id) => {
    removeFromDb(id);
  };
  

  return (
    <div className="product">
      <h2>Buy this: {name}</h2>
      <p>Only for: ${price}</p>
      <p>
        <small>It has id: {id}</small>
      </p>
      {/*  <button onClick={addToCartParamerter}>Add to Cart</button> */}
      {/* eventHandeler arrow function shortcart formula */}
      <button onClick={() => addToCart(id)}>Purchase</button>
      <button onClick={() => removeFromCart(id)}>Remove</button>
    </div>
  );
};

export default Cosmetic;
