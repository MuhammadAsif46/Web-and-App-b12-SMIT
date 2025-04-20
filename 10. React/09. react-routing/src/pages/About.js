import React from "react";
import Links from "../components/Links";
import { useLocation } from "react-router-dom";


const About = () => {
  const {state} = useLocation()
  console.log("location->", state);
  
  return (
    <div>
      <h1>About ({state?.email})</h1>
      <Links />
    </div>
  );
};

export default About;
