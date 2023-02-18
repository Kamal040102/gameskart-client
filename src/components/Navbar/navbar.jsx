import React from "react";
import { Link, useLocation } from "react-router-dom";
import DarkModeToggle from "react-dark-mode-toggle";

const Navbar = () => {
  const location = useLocation();
  const [onSignIn, setOnSignIn] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(() => false);

  React.useEffect(() => {
    console.log(location);
    if (location.pathname === "/signin") {
      setOnSignIn(true);
    } else {
      setOnSignIn(false);
    }
  }, [location]);

  return (
    <nav
      className={`navbar navbar-${
        isDarkMode ? "dark" : "lignt"
      } navbar-expand-lg bg-${isDarkMode ? "dark" : "lignt"}`}
    >
      <div className="container-fluid">
        <div className="d-flex">
          <Link className="navbar-brand" to="/">
            Gameskart
          </Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Brands
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/">
                    Brand Name
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <div className="d-flex align-items-center">
            <div>
              <DarkModeToggle
                onChange={setIsDarkMode}
                checked={isDarkMode}
                size={50}
              />
            </div>
            <div className="ms-3">
              <Link
                className="btn btn-outline-success w-100"
                to={onSignIn ? "/signup" : "/signin"}
              >
                {onSignIn ? "Sign up" : "Sign in"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
