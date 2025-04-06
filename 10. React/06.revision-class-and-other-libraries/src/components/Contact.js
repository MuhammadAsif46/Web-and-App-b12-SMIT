import React from "react";
import Button from "react-bootstrap/Button";
import Card from "./Card/Cards";
// import { Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <div>
      <h1>Contact page</h1>
      <p>Bootstrap Componets</p>
      {/* <Button variant="warning">Warning</Button>
      <Button variant="primary">submit</Button> */}
      <button className="btn btn-danger">post</button>
      {/* <>
        <button type="button" className="btn btn-primary">
          Primary
        </button>
        <button type="button" className="btn btn-secondary">
          Secondary
        </button>
        <button type="button" className="btn btn-success">
          Success
        </button>
        <button type="button" className="btn btn-danger">
          Danger
        </button>
        <button type="button" className="btn btn-warning">
          Warning
        </button>
        <button type="button" className="btn btn-info">
          Info
        </button>
        <button type="button" className="btn btn-light">
          Light
        </button>
        <button type="button" className="btn btn-dark">
          Dark
        </button>
      </> */}
      <Card/>
    </div>
  );
};

export default Contact;
