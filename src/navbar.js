import React from "react";
import { NavLink } from "react-router-dom";
// import { useRoutes } from "hookrouter";

// import Routes from "./";

const Navbar = () => {
  return (
    <div className="nav">
      <NavLink activeClassName="nav-link-active" exact to="/">
        Home
      </NavLink>
      <NavLink activeClassName="nav-link-active" to="/add-sub">
        Counter
      </NavLink>
      <NavLink activeClassName="nav-link-active" to="/bye">
        Toggle Item
      </NavLink>
      <NavLink activeClassName="nav-link-active" to="/grow-shrink">
        Text Sizer
      </NavLink>
      <NavLink activeClassName="nav-link-active" to="/hide">
        Toggle Visibility
      </NavLink>
      <NavLink activeClassName="nav-link-active" to="/align">
        Text Aligner
      </NavLink>
      <NavLink activeClassName="nav-link-active" to="/currentTime">
        Clock
      </NavLink>
      <NavLink activeClassName="nav-link-active" to="/color">
        Color Changer
      </NavLink>
      <NavLink activeClassName="nav-link-active" to="/random-color">
        Random Color
      </NavLink>
      <NavLink activeClassName="nav-link-active" to="/hex-counter">
        Hex Counter
      </NavLink>
    </div>
  );
};

export default Navbar;
