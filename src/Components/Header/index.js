import logo from "../../images/hm logo.jpg";
import { useNavigate } from "react-router-dom";
import "./header.css";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import UserContext from "../../context/userContext";
function Header() {
  const navigate = useNavigate();
  const { setUser, user } = useContext(UserContext);

  return (
    <div className="main-header">
      <div className="header-signin">
        <img className="header-img" src={logo} alt="hM logo" />
        <div className="signup-signin">
          {user.email ? (
            <Link to="/Signin" className="header-links signin-signup-border">
              Logout
            </Link>
          ) : (
            <>
              <Link to="/Signup" className="header-links signin-signup-border">
                Sign Up
              </Link>
              <Link to="/Signin" className="header-links signin-signup-border">
                Sign In
              </Link>
            </>
          )}
        </div>
      </div>
      <div className="header-catogories">
        <Link to="/" className="header-links">
          Used cars
        </Link>
        <Link to="/new" className="header-links">
          New cars
        </Link>
        <Link to="/video" className="header-links">
          videos
        </Link>
        <button onClick={() => navigate("/postadd")} className="sell-btn">
          Sell
        </button>
      </div>
    </div>
  );
}
export default Header;
