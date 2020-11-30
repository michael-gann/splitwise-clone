import { NavLink } from "react-router-dom";

import "./UserOptions.css";

import FriendView from "../FriendView";

const UserOptions = () => {
  return (
    <div className="options-div">
      <div className="navlinks">
        <NavLink to="/dashboard">Dashboard</NavLink>
      </div>
      <div className="navlinks">
        <NavLink to="/activity">Activity</NavLink>
      </div>
      <div className="navlinks">
        <NavLink to="/all">All Expenses</NavLink>
      </div>
      <FriendView></FriendView>
    </div>
  );
};

export default UserOptions;
