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
      <>
        <NavLink className="login-link" to="/login">
          Log In
        </NavLink>
        <NavLink className="signup-link" to="/signup">
          Sign Up
        </NavLink>
      </>
    );
  }

  return (
    <nav className="main-nav-container">
      <div className="sidebar-menu">
        <button onClick={handleClick} className="sidebar">
          <i className="fas fa-bars"></i>
        </button>
        <Sidebar visible={show}></Sidebar>
      </div>
      <div className="title">
        <div>
          <NavLink exact to="/">
            <div className="logo">
              <img alt="splitease logo" src="/images/splitease-logo.png" />
            </div>
          </NavLink>
        </div>
      </div>
      <div>
        <div>{isLoaded && sessionLinks}</div>
      </div>
      {/* <div className="link-container">
        <div className="home-link">
          <NavLink exact to="/">
            Splitease
          </NavLink> */}
      {/* {isLoaded && sessionLinks} */}
      {/* </div> */}
      {/* // </div> */}
    </nav>
  );
};

export default Navigation;
