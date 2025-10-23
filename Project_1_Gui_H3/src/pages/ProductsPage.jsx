import React, { useEffect, useState } from "react";
import GridContainer from "../components/GridContainer/GridContainer";
import ProductCard from "../components/ProductCard/ProductCard";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const result = await response.json();
        setProducts(result.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);

  // Filtrér produkter efter søgefelt
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) return <p>Indlæser produkter...</p>;
  if (error) return <p>Fejl i hentning af data: {error}</p>;

  return (
    <div>
      <h1>Produkter</h1>

      {/* Søgefelt */}
      <input
        type="text"
        placeholder="Søg efter produkt..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "8px 12px",
          marginBottom: "1rem",
          width: "250px",
          borderRadius: "8px",
        }}
      />

      <GridContainer>
        {filteredProducts.map((item) => (
          <div key={item.id}>
            <ProductCard
              title={item.title}
              price={item.price}
              description={item.description}
              image={item.images[0]}
            />
            <Link to={`/ProductPage/${item.id}`}>Læs Mere</Link>
          </div>
        ))}
      </GridContainer>
    </div>
  );
};

export default ProductsPage;
