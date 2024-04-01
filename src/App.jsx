import { useCallback, useEffect, useState } from "react";
import "./App.css";
import AllProducts from "./components/AllProducts";
import CartProducts from "./components/CartProducts";
function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartProducts, setCartProducts] = useState([]);
  const increaseQuantity = (id) => {
    const temp = cartProducts.map((product) => {
      if (product.id == id) {
        return { ...product, quantity: product.quantity + 1 };
      } else return product;
    });
    setCartProducts(temp);
  };
  const decreaseQuantity = (id) => {
    const temp = cartProducts.map((product) => {
      if (product.id == id && product.quantity != 1) {
        return { ...product, quantity: product.quantity - 1 };
      } else return product;
    });
    setCartProducts(temp);
  };
  const addToCart = (id) => {
    const alreadyInCart = cartProducts.some((product) => product.id == id);
    if (!alreadyInCart) {
      const product = allProducts.filter((product) => product.id == id)[0];
      setCartProducts([...cartProducts, { ...product, quantity: 1 }]);
    } else {
      console.log("already in cart");
    }
  };
  const removeFromCart = (id) => {
    const temp = cartProducts.filter((product) => product.id != id);
    setCartProducts(temp);
  };
  const getAllData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=8");
      const { products } = await res.json();
      setAllProducts(products);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  function moveButton() {
    const noButton = document.getElementById("no");
    let maxWidth = window.innerWidth - noButton.offsetWidth; // consider button width
    let maxHeight = window.innerHeight - noButton.offsetHeight; // consider button height
    let randomX = Math.floor(Math.random() * maxWidth);
    let randomY = Math.floor(Math.random() * maxHeight);

    console.log("x" + randomX, "y" + randomY);
    noButton.style.position = "absolute";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
  }

  useEffect(() => {
    getAllData();
    const noButton = document.getElementById("no");

    noButton.addEventListener("click", moveButton);

    return () => {
      noButton.removeEventListener("click", moveButton);
    };
  }, []);
  return (
    <div className="container">
      <div id="message">
        <p>Paisa Saisa Maru</p>
        <p>Kinna Parya Cha</p>
        <p className="padhnajau">Padhna Jau</p>
        <div className="buttons">
          <a href="https://en.wikipedia.org/wiki/Motivation" id="yes">
            🆗 La Gaye
          </a>
          <button id="no">🙅‍♀️ Nai Jadina</button>
        </div>
      </div>
      {loading ? (
        <p className="loading">Loading Products...</p>
      ) : (
        <AllProducts
          allProducts={allProducts}
          addToCart={addToCart}
          cartProducts={cartProducts}
          removeFromCart={removeFromCart}
        />
      )}
      <CartProducts
        cartProducts={cartProducts}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />
    </div>
  );
}

export default App;
