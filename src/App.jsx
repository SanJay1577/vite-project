import { useState } from "react";
import "./App.css";
import ProductCard from "./ProductCard.jsx";
function App() {
  const data = [
    {
      productImage:
        "https://www.skechers.in/on/demandware.static/-/Sites-skechers_india/default/dw17940ed5/images/large/195969748763-1.jpg",
      productName: "Sketchers",
    },
    {
      productImage:
        "https://www.skechers.in/on/demandware.static/-/Sites-skechers_india/default/dw17940ed5/images/large/195969748763-1.jpg",
      productName: "Nike",
    },
    {
      productImage:
        "https://www.skechers.in/on/demandware.static/-/Sites-skechers_india/default/dw17940ed5/images/large/195969748763-1.jpg",
      productName: "Puma",
    },
    {
      productImage:
        "https://www.skechers.in/on/demandware.static/-/Sites-skechers_india/default/dw17940ed5/images/large/195969748763-1.jpg",
      productName: "USP",
    },
  ];

  const [product, setProduct] = useState([]);
  const [inCart, setInCart] = useState(0);

  // dummy dely
  setTimeout(() => {
    setProduct(data);
  }, 1000);

  return (
    <div className="app">
      <div className="cart-comp">
        <h1>CART {inCart}</h1>
      </div>

      <div className="cart-area">
        {product?.map((prod, idx) => (
          <ProductCard
            key={idx}
            productImg={prod.productImage}
            productName={prod.productName}
            inCart={inCart}
            setInCart={setInCart}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
