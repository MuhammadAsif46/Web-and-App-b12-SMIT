import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
    const cartvalue = useSelector((state)=>state.carts.cart)
  return (
    <div className="d-flex justify-content-around align-items-center">
      <h1>Header Component</h1>
      <div className="d-flex position-relative">
        <FaShoppingCart fontSize={35} />
        <div className="bg-warning position-absolute end-0  d-flex justify-content-around align-items-center rounded" style={{ width: 15, height: 15 }}>
          <span className="">{cartvalue}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
