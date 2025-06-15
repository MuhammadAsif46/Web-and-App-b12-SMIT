import React, { useContext } from "react";
import User from "../context/user";
import Profile from "./Profile";

const Card = () => {
  const { name, setName } = useContext(User);
  console.log("username->", name);

  return (
    <div>
      <h1>Card :- ({name})</h1>
      <button onClick={() => setName("Jhon")}>Value</button>
      <Profile/>
    </div>
  );
};

export default Card;
