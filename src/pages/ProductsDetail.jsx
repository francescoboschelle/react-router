import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

export default function ProductsDetail() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  let params = useParams();
  let navigate = useNavigate();
  const { id } = params;

  useEffect(() => {
    if (!id || isNaN(parseInt(id))) {
      navigate("/not-found");
      return;
    }

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) =>
        res.json().catch(() => {
          navigate("/not-found");
        })
      )
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id, navigate]);

  return (
    <main className="page-content">
      <div className="container mt-5 mb-5">
        {loading ? (
          <div className="text-center">
            <h2>Loading...</h2>
          </div>
        ) : (
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
              <div className="mt-3">
                {parseInt(id) > 1 ? (
                  <Link
                    to={`/products/${parseInt(id) - 1}`}
                    className="btn btn-secondary me-2"
                  >
                    Previous Product
                  </Link>
                ) : (
                  <></>
                )}
                {parseInt(id) < 20 ? (
                  <Link
                    to={`/products/${parseInt(id) + 1}`}
                    className="btn btn-secondary "
                  >
                    Next Product
                  </Link>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
