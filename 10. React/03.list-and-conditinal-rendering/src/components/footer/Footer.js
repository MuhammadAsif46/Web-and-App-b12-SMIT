import { FIRST_NAME  } from "../../utilis/constant.js";
import { last_name as lastName  } from "../../utilis/constant.js";

function Footer() {
  console.log(FIRST_NAME);

  return (
    <div>
      <h1 style={{ backgroundColor: "black", color: "white" }}>Footer</h1>
      <h3>{FIRST_NAME}</h3>
      <h3>{lastName}</h3>
    </div>
  );
}

export default Footer;
