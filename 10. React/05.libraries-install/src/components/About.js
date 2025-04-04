import React from "react";
import { Button, Input } from "antd";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Button color="default" variant="outlined">
        Solid
      </Button>
      <Input.Password placeholder="input password" />
    </div>
  );
};

export default About;
