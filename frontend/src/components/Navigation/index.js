import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

const Navigation = ({ isLoaded }) => {
  const sessionUser = useSelector((state) => state.session.user);

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
      <div className="link-container">
        <div className="home-link">
          <NavLink exact to="/">
            Splitease
          </NavLink>
        </div>
        {isLoaded && sessionLinks}
      </div>
    </nav>
  );
};

export default Navigation;
