import { Link } from "react-router-dom";

export default function Card({ product }) {
  return (
    <div className="col-4 d-flex">
      <Link
        to={`/products/${product.id}`}
        className="text-decoration-none d-flex"
      >
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
      </Link>
    </div>
  );
}
