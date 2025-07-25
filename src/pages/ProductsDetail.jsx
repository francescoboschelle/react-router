import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductsDetail() {
  const [product, setProduct] = useState([]);
  let params = useParams();
  const { id } = params;

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  return (
    <main className="page-content">
      <div className="container mt-5 mb-5">
        <div className="row g-4">
          <div className="col-6">
            <img
              className="img-fluid"
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className="col-6">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <h3>${product.price}</h3>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </main>
  );
}
