import { useEffect, useState } from "react";

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
            return (
              <div className="col-4 d-flex" key={`product-${index}`}>
                <div className="card flex-grow-1">
                  <img
                    className="card-img-top p-3 card-img-css"
                    src={product.image}
                    alt={product.title}
                  />
                  <div className="card-body">
                    <h4 className="card-title">{product.title}</h4>
                    <p className="card-text">{product.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
