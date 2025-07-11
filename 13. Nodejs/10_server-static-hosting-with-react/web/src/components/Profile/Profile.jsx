import axios from "axios";
import React, { useState } from "react";

const Profile = () => {
  const [file, setFile] = useState({});

  const uploadFile = () => {

    const formdata = new FormData();
    formdata.append("file", file)
    console.log(file);

    axios.post("http://localhost:5000/api/upload", formdata, {
        headers: {
            "Content-Type": "app"
        }
    })
    .then(res => console.log("res-->", res))
    .catch(err => console.log("err-->", err))
  };
  return (
    <div>
      <h1>Profile</h1>
      <input type="file" name="file" id="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={uploadFile}>Upload</button>
      
    </div>
  );
};

export default Profile;
