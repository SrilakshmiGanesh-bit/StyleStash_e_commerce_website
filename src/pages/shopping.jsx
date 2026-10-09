import "./Shopping.css";

function Shopping({ addToCart }) {
  const products = [
    { id: 1, name: "Casual Dress", price: 799 },
    { id: 2, name: "Stylish Top", price: 499 },
    { id: 3, name: "Fashion Bag", price: 999 }
  ];

  return (
    <div className="shopping">
      <h1>Our Collection</h1>

      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shopping;