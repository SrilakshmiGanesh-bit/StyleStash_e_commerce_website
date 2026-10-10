import "./Cart.css";

function Cart({ cart, updateQuantity, removeFromCart }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
   function handleSubmit() {
    alert("Your order has been placed successfully!");

   }

  return (
    <div className="cart">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div>
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>

                <button onClick={() => updateQuantity(item.id, -1)}>
                  -
                </button>

                <span> {item.quantity} </span>

                <button onClick={() => updateQuantity(item.id, 1)}>
                  +
                </button>

                <button onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}

          <h2>Total: ₹{total}</h2>
          <button  onClick={handleSubmit} className="checkout-button">Buy Now</button>
        </>
      )}
    </div>
  );
}

export default Cart;