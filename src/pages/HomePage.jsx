import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main className="page-content">
      <div className="p-5 h-100 bg-tansparent d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="container-fluid py-5 text-white front-page-content">
            <h1 className="display-5 fw-bold">Welcome to ShopVerse</h1>
            <p className="col-md-8 fs-4">
              Discover a universe of shopping at ShopVerse, your destination for
              clothes, tech, home essentials, and more. Explore our diverse
              selection of quality products, curated for every lifestyle and
              need. Upgrade your everyday with the best from every category.
            </p>
            <Link
              className="btn btn-primary btn-lg"
              to="/products"
              role="button"
            >
              Explore Collection
            </Link>
          </div>
        </div>
      </div>
      <img
        src="https://picsum.photos/1920/1080"
        alt="Background Image"
        className="background-image"
      />
    </main>
  );
}
