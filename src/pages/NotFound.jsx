import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="page-content">
      <div className="container mt-5 mb-5 text-center">
        <h1>404 | Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link className="btn btn-primary" to="/">
          Go to Home
        </Link>
      </div>
    </main>
  );
}
