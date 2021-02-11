import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import Sidebar from "../Sidebar";
import "../Sidebar/Sidebar.css";

const Navigation = ({ isLoaded }) => {
  const sessionUser = useSelector((state) => state.session.user);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow((show) => !show);
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <div className="auth-links">
        <NavLink className="login-link" to="/login">
          Log In
        </NavLink>
        <NavLink className="signup-link" to="/signup">
          Sign Up
        </NavLink>
      </div>
    );
  }

  return (
    <nav className="main-nav-container">
      <div className="nav-wrapper">
        <div className="sidebar"></div>
        <div className="title">
          <div>
            <NavLink exact to="/">
              <div className="logo">
                <img alt="splitease logo" src="/images/splitease-logo.png" />
              </div>
            </NavLink>
          </div>
        </div>
        <div className="session-links">
          <div>{isLoaded && sessionLinks}</div>
        </div>
      </div>

      {isLoaded && sessionUser ? (
        <div className="option-links">
          <div className="navlinks">
            <NavLink to="/dashboard">Dashboard</NavLink>
          </div>
          <div className="navlinks">
            <NavLink to="/activity">Activity</NavLink>
          </div>
          <div className="navlinks">
            <NavLink to="/all">All Expenses</NavLink>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Navigation;
