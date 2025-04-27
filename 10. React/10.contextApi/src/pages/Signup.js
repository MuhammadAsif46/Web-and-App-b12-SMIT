import React, { useContext, useState } from "react";
import Profile from "./Profile";
import User from "../context/user";

const Signup = () => {
  const { setSubject } = useContext(User);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();
    setSubject(username, password);
  };
  return (
    <div>
      <h1>Signup</h1>
      <input
        type="text"
        placeholder="Subject"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button onClick={submitHandle}>Signup</button>
      <br />
      <br />
      <Profile />
    </div>
  );
};

export default Signup;
