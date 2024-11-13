import logo from "../assets/images.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "nav-link active text-white fw-bold bg-dark rounded p-2 border-0"
      : "nav-link active text-white fw-bold rounded p-2 border-0";

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <div className="d-flex justify-content-between w-100">
            <NavLink
              className="navbar-brand ms-5 text-white fw-bold d-flex align-items-center"
              to="/"
            >
              <img
                src={logo}
                alt="logo"
                className="rounded-circle logo-small me-2"
                style={{ width: "40px", height: "40px" }}
              />
              React Jobs
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {" "}
              <span className="navbar-toggler-icon"></span>{" "}
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item me-3">
                  <NavLink className={linkClass} aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item me-3">
                  <NavLink className={linkClass} to="/jobs">
                    Jobs
                  </NavLink>
                </li>
                <li className="nav-item me-3">
                  <NavLink
                    className={linkClass}
                    to="/add-job"
                    tabIndex="-1"
                    aria-disabled="true"
                  >
                    Add Job
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
