import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const SingleProductPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) return <p>Indlæser produkt...</p>;
  if (error) return <p>Fejl: {error}</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{product.title}</h1>
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{ width: "300px", borderRadius: "10px", marginBottom: "1rem" }}
      />
      <p>
        <strong>Pris:</strong> ${product.price}
      </p>
      <p>
        <strong>Beskrivelse:</strong> {product.description}
      </p>
      <p>
        <strong>Brand:</strong> {product.brand}
      </p>
      <p>
        <strong>Kategori:</strong> {product.category}
      </p>
      <button
        onClick={() => navigate(-1)}
        style={{
          padding: "8px 16px",
          marginTop: "1rem",
          borderRadius: "5px",
          backgroundColor: "#3498db",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >Tilbage</button>
    </div>
  );
};

export default SingleProductPage;
