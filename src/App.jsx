import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shopping from "./pages/Shopping";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]);

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });

    alert(`${product.name} added to cart!`);
  };

  const updateQuantity = (id, change) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== id)
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Login page */}
        <Route path="/" element={<Login />} />

        {/* Home page */}
        <Route
          path="/home"
          element={
            <>
              <Navbar cartCount={cartCount} />
              <Home />
              <Footer />
            </>
          }
        />

        {/* About page */}
        <Route
          path="/about"
          element={
            <>
              <Navbar cartCount={cartCount} />
              <About />
              <Footer />
            </>
          }
        />

        {/* Contact page */}
        <Route
          path="/contact"
          element={
            <>
              <Navbar cartCount={cartCount} />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Shopping page */}
        <Route
          path="/shopping"
          element={
            <>
              <Navbar cartCount={cartCount} />
              <Shopping addToCart={addToCart} />
              <Footer />
            </>
          }
        />

        {/* Cart page */}
        <Route
          path="/cart"
          element={
            <>
              <Navbar cartCount={cartCount} />
              <Cart
                cart={cart}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
              />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
