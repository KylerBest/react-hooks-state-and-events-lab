import React, {useState} from "react";


function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)
  function handleAddToCart(){
    setInCart(true)
  }
  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddToCart} className="add">Add to Cart</button>
    </li>
  )
}

export default Item;