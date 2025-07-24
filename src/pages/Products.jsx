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
      <div class="container mt-5 mb-5">
        <div class="row g-4">
          {products.map((product) => {
            return (
              <div class="col-4 d-flex">
                <div class="card flex-grow-1">
                  <img
                    class="card-img-top p-3 card-img-css"
                    src={product.image}
                    alt={product.title}
                  />
                  <div class="card-body">
                    <h4 class="card-title">{product.title}</h4>
                    <p class="card-text">{product.description}</p>
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
