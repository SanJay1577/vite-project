// card component

import { useState } from "react";

// eslint-disable-next-line react/prop-types
function ProductCard({ productImg, productName, inCart, setInCart }) {
  const [show, setShow] = useState(true);

  const handleAdd = () => {
    // change the state of the add button
    setShow(!show);
    setInCart(inCart + 1);
  };

  const handleRemove = () => {
    // change the state of the remove button
    setShow(!show);
    setInCart(inCart - 1);
  };

  return (
    <div className="card-component">
      <img src={productImg} alt="no data" />
      <h3>{productName}</h3>
      {show === true ? (
        <button onClick={handleAdd}>Add to Cart</button>
      ) : (
        <button onClick={handleRemove}>Remove from Cart</button>
      )}
    </div>
  );
}

export default ProductCard;
