import "./Sidebar.css";
import UserOptions from "../UserOptions/index";

const Sidebar = ({ visible, user }) => {
  return (
    <div id="navbar" className={visible ? "slideIn" : "slideOut"}>
     { user ? <UserOptions></UserOptions> : <div> <a href="/login">Login</a></div> }
    </div>
  );
};

export default Sidebar;
