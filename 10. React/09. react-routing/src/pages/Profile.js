import React from "react";
import Links from "../components/Links";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { username } = useParams();
//   console.log("Params->", username);

  return (
    <div>
      <h1>Profile ({username})</h1>
      <Links />
    </div>
  );
};

export default Profile;
