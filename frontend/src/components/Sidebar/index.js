import "./Sidebar.css";
import UserOptions from "../UserOptions/index";

const Sidebar = ({ visible }) => {
  return (
    <div id="navbar" className={visible ? "slideIn" : "slideOut"}>
      <UserOptions></UserOptions>
    </div>
  );
};

export default Sidebar;
