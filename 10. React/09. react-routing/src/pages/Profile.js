import React from "react";
import Links from "../components/Links";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { username } = useParams();
  // console.log("Params->", params.username);

  const logout = () => {
    localStorage.removeItem("user")
  }

  return (
    <div>
      <h1>Profile ({username})</h1>
      <button className="w-25" onClick={logout}>Logout</button>
      <Links />
    </div>
  );
};

export default Profile;
