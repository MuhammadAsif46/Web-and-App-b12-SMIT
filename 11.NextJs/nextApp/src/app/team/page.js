"use client";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import axios from "axios";

const Team = () => {
  //   console.log("SERVER IS RUNNING....");

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setData(res.data));
  }, []);

//   console.log("data.", data);

  return (
    <div>
      <h1 className={styles.about}>Team</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id} className={styles.list}>
            <sapn>{item.name}</sapn>
            <span>{item.phone}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Team;
