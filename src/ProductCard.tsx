import { useCart } from "./CartContext";
import "./ProductCard.css"; // Import the CSS file

export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export type CartItem = Product & { quantity: number };

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart, removeFromCart } = useCart();

  const handleAddToCart = () => {
    const cartItem: CartItem = { ...product, quantity: 1 };
    addToCart(cartItem);
    alert(`${product.title} added to cart!`);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
    alert(`${product.title} removed from cart!`);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">${product.price}</p>
      
      <div className="button-group">
        <button onClick={handleAddToCart} className="add-to-cart-btn">
          Add to Cart
        </button>
        <button onClick={handleRemoveFromCart} className="remove-from-cart-btn">
          Remove
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
