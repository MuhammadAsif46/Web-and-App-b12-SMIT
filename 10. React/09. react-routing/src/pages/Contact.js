import React from "react";

import Links from "../components/Links";
import { useSearchParams } from "react-router-dom";

const Contact = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  console.log("searchParams-->", searchParams);
  const cityName = searchParams.get("city")
  const countryName = searchParams.get("country")
  // console.log("searchParams-->", searchParams.get("name"));
  // console.log("searchParams-->", searchParams.get("id"));

  const setParams = ()=>{
    setSearchParams({city: "karachi", country: "pakistan"})
  }
  

  return (
    <div>
      <h1>Contact</h1>
      <button onClick={setParams}>Set Params</button>
      {cityName +  countryName}
      <Links />
    </div>
  );
};

export default Contact;
