import { NavLink } from "react-router-dom";

const TopBar = () => {
    return (
        <div className="top-bar">
            <NavLink to="first-react-project/">Home </NavLink>
            <NavLink to="first-react-project/about">About</NavLink>
        </div>
    );
  };
  
  export default TopBar;