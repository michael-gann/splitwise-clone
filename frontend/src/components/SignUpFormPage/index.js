import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";

import "./SignupForm.css";

const SignupFormPage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  if (sessionUser) return <Redirect to="/dashboard" />;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        sessionActions.signup({ email, username, password })
      ).catch((res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      });
    }
    return setErrors(["Passwords must match"]);
  };

  return (
    <div className="main-container">
      <form className="signup-form" onSubmit={handleFormSubmit}>
        <div className="signup-container">
          <ul className="signupErrors-ul">
            {errors.map((error, idx) => (
              <div className="signupErrors-div" key={idx}>
                {error === "Invalid value" ? null : error}
              </div>
            ))}
          </ul>
          <div className="signup-usernamefields">
            <label>Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Jane123"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>
          <div className="emailfields">
            <label>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="Jane@jane.io"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="passwordfields">
            <label>Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className="confirm-passwordfields">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></input>
          </div>
          <button className="signup-button" type="submit">
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupFormPage;
