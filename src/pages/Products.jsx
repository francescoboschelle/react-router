import { useEffect, useState } from "react";
import Card from "../components/Card";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <main className="page-content">
      <div className="container mt-5 mb-5">
        <div className="row g-4">
          {products.map((product, index) => {
            return <Card product={product} key={`product:${index}`} />;
          })}
        </div>
      </div>
    </main>
  );
}
