import { useQuery } from "@tanstack/react-query";
import ProductCard, { Product } from "./ProductCard";
import "./ProductListing.css"; // Import the CSS file

const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) throw new Error("Failed to fetch");
  return response.json();
};

const ProductListing = () => {
  const { data: products = [], error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductListing;
