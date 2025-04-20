import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Links = () => {
  const location = useLocation();
  
  return (
    <ul>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/login"}>Login</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>
        {location.pathname === "/contact" ? "Contact" : "Ye Contact Page nahi hai"}
      </NavLink>
      </li>
      <li>
        <NavLink to={"/profile"}>Profile</NavLink>
      </li>
    </ul>
  );
};

export default Links;
