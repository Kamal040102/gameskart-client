import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import DarkModeToggle from "react-dark-mode-toggle";
import { useDispatch, useSelector } from "react-redux";
import { signinActions } from "../../redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [onSignIn, setOnSignIn] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(() => false);
  const { data } = useSelector((state) => state.signinReducer);

  React.useEffect(() => {
    if (location.pathname === "/signin") {
      setOnSignIn(true);
    } else {
      setOnSignIn(false);
    }
  }, [location, data]);

  // onClick={(e)=>{
  //                 e.preventDefault();
  //                 onSignIn ? navigate("/signup") :
  //                 data?._id ? (localStorage.removeItem("token") navigate("/signin")) : navigate("/signin")
  //               }}

  const onClick = (e) => {
    e.preventDefault();
    if (onSignIn) {
      navigate("/signup");
    } else if (data?._id) {
      dispatch(signinActions.signinReset());
      localStorage.removeItem("token");
      navigate("/signin");
    } else {
      navigate("/signin");
    }
  };

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
          {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
          </ul> */}
          <Link className="navbar-brand" to={"/test-components"}>
            Components
          </Link>
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
              <button
                className="btn btn-outline-success w-100"
                onClick={onClick}
              >
                {onSignIn ? "Sign up" : data?._id ? "Log out" : "Sign in"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
