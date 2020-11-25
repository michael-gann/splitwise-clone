import { NavLink } from "react-router-dom";
const UserOptions = () => {
  return (
    <div className="options-div">
      <div>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </div>
      <div>
        <NavLink to="/activity">Activity</NavLink>
      </div>
    </div>
  );
};

export default UserOptions;
