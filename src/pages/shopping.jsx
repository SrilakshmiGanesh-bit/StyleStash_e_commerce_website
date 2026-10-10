import "./Shopping.css";

function Shopping({ addToCart }) {
  const products = [
    {
      id: 1,
      name: "Casual Dress",
      price: 799,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500"
    },
    {
      id: 2,
      name: "Stylish Top",
      price: 499,
      image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=500"
    },
    {
      id: 3,
      name: "Fashion Bag",
      price: 999,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500"
    }
  ];

  return (
    <div className="shopping">
      <h1>Our Collection</h1>
      <p>Discover your style with StyleStash.</p>

      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} />

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