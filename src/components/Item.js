import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);
  const [buttonText, setButtonText] = useState(false);
  const liClass = inCart ? "in-cart" : "";
  const buttonClass = buttonText ? "Remove from Cart" : "Add to Cart";

  function handleInCart(){
    setInCart(!inCart);
    // setButtonText(buttonText === "Remove from Cart" ? "Add to Cart" : "Remove from Cart");
    setButtonText(buttonText => !buttonText);
   }
   return (
    
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add">Add to Cart</button> 
      <button className="add" onClick={handleInCart}>{buttonClass}</button>
    </li>
  );
}

export default Item;
