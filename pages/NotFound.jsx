import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <section className="text-center d-flex flex-column justify-content-center align-items-center vh-100">
        <h1 className="display-1 fw-bold mb-4">404 Not Found</h1>
        <p className="h4 mb-5">This page does not exist</p>
        <Link to="/" className="btn btn-primary rounded px-4 py-2 mt-4">
          Go Back
        </Link>
      </section>
    </>
  );
}
export default NotFound;
