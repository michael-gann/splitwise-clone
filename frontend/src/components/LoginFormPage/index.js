import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import "./LoginForm.css";

import * as sessionActions from "../../store/session";

const LoginFormPage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [errors, setErrors] = useState([]);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");

  if (sessionUser) return <Redirect to="/" />;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.loginUser({ credential, password })).catch(
      (res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      }
    );
  };

  return (
    <div className="main-container">
      <form className="login-form" onSubmit={handleFormSubmit}>
        <div className="login-container">
          <ul className="loginErrors-ul">
            {errors.map((error, idx) => (
              <div className="loginErrors-div" key={idx}>
                {error}
              </div>
            ))}
          </ul>
          <div className="usernamefields">
            <label>Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="i.e. John123"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
            ></input>
          </div>
          <div className="passwordfields">
            <label>Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <button className="login-button" type="submit">
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginFormPage;
