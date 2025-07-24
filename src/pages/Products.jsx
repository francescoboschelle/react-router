import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <main>
      <div class="container">
        <div class="row">
          {products.map((product) => {
            return (
              <div class="col-4">
                <div class="card">
                  <img class="card-img-top" src={product.image} alt="Title" />
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
